import torch
import cv2
import numpy as np

# YOLOv5 모델 로드 (pre-trained 모델)
model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)

# 비디오 파일 경로 또는 0(웹캠 사용)
video_path = 'video.mp4'  # 또는 0

# 비디오 캡처
cap = cv2.VideoCapture(video_path)

# 비디오 실행 여부 확인
if not cap.isOpened():
    print("Error: Could not open video.")
    exit()

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    # 모델에 맞게 프레임을 변환하여 객체 감지 수행
    results = model(frame)

    # 결과에서 감지된 객체들의 정보를 얻어옴
    df = results.pandas().xyxy[0]  # DataFrame 형식으로 bbox 정보 반환

    # 객체 정보를 프레임에 표시
    for _, row in df.iterrows():
        x1, y1, x2, y2 = int(row['xmin']), int(row['ymin']), int(row['xmax']), int(row['ymax'])
        label = f"{row['name']} {row['confidence']:.2f}"

        # 박스 그리기
        cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
        cv2.putText(frame, label, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 1)

    # 결과 프레임 표시
    cv2.imshow('YOLOv5 Object Detection', frame)

    # 'q'를 누르면 종료
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# 자원 해제
cap.release()
cv2.destroyAllWindows()
