import socket
import threading
import json
from dotenv import load_dotenv
import os
import time
import cv2
import get_status as get

# .env.local 파일에서 환경 변수 로드
load_dotenv(".env.local")

# 환경 변수에서 HOST와 PORT 읽기
HOST = os.getenv("HOST")
PORT = int(os.getenv("PORT"))
TIME_INTERVAL = 1 # second

robot_status = {
    'speed' : 0,
    'battery' : 0,      # Percentage (0% ~ 100%)
    'temperature' : 0,  # (-20, 40) Celsius
    'humidity' : 0      # (0% ~ 100%);
}

image = {
    'resolution' : {
        'width' : 640,
        'height' : 480,
    },
    'type' : 1, # Gray(1), RGB(3)
    'data' : ''
}

def set_robot_status(client_socket):
    while True:
        try:
            data = client_socket.recv(1024)
            if not data:
                break

            message = json.loads(data.decode("utf-8"))
            if isinstance(message, dict):
                for key, value in message.items():
                    if key not in robot_status:
                        raise KeyError(f"Invalid key: {key}. Key not found in robot_status.")
                    elif key == "yaw" and value not in range(0, 360):
                        raise ValueError("Angle must be in 0 ~ 360")
                    elif key == "speed" and value not in range(0, 40): # Maximum 40km/h
                        raise ValueError("Speed must be in 0 ~ 40")
                    else:
                        robot_status[key] = value

                print("robot_status is changed successfully.")
                print(json.dumps(robot_status, indent=4))
            else:
                print("Invalid data format received.")
        except json.JSONDecodeError:
            print("Received invalid JSON data.")
        except KeyError as ke:
            print(f"Key error: {ke}")
        except ValueError as ve:
            print(f"Value error: {ve}")
        except Exception as e:
            print(f"Error in set_robot_status: {e}")
            
def send_robot_status(client_socket):
    while True:
        try:
            time.sleep(TIME_INTERVAL)

            robot_status['temperature'] = get.temperature()
            robot_status['humidity'] = get.humidity()
            robot_status['battery'] = get.battery()
            robot_status['speed'] = get.speed()

            message = json.dumps(robot_status)
            client_socket.sendall(message.encode("utf-8"))

        except Exception as e:
            print(f"Error in send_robot_status: {e}")
            break

def run():
    try:
        client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        print(f"Connecting to => {HOST}:{PORT}")
        client_socket.connect((HOST, PORT))
        print("Complished succesfully")

        thread1 = threading.Thread(target=set_robot_status, args=(client_socket,))
        thread2 = threading.Thread(target=send_robot_status, args=(client_socket,))

        thread1.start()
        thread2.start()

        thread1.join()
        thread2.join()

    except Exception as e:
        print(f"Failed to connect: {e}")

if __name__ == "__main__":
    run()