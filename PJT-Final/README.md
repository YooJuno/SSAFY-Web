# Robot Web Interface
## 주제
- AMR Controller 조작 및 상태 확인 인터페이스 구현

## Devices
### Robot
- Camera
- RaspberryPI 5 
    - RAM 8GB/SSD 32GB

### Server
- MacBook Pro M1
    - 16GB / 512GB

### Client
- Desktop

## 프로그램 개요
- 자율모바일로봇의 이동을 제어하고 상태 정보를 감시한다.
- 또한 로봇으로부터 수신한 이미지에서 객체를 검출하고 그 결과를 웹페이지에 표시한다.
- 디지털 트윈과의 결합도 고려하여 인터페이스를 구축한다.
### Web Interface [ VUE ]

#### Main
- 로봇의 현재 상태
    - 온도, 습도, 배터리 잔량
- 객체 탐지 종류 - 도넛
- 2차원 지도 상의 X, Y 좌표
- Yaw, Pitch, Roll - Time 그래프
- 검출 이미지 

### MySQL
- 시간 별 로그
- 위치 및 자세 정보
- 객체 검출 이미지
- 로봇 상태 정보

### Robot
1. 카메라를 장착한 AMR(Automotive Mobile Robot)
2. 자료 구조
```json
"Image": "curImage",
"Pose": {
    "Position" : {
        "x": "curX",
        "y": "curY"
    },
    "Orientation": 
    {
        "yaw": "curYaw",
        "pitch": "curPitch",
        "roll": "curRoll"
    }   
}
"Status": {
    "Battery": "curBattery",
    "Temperature": "curTemperature",
    "Humidity": "curHumidity"
}
```