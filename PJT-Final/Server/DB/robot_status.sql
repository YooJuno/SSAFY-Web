CREATE TABLE robot_status (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255), -- 이미지 경로 (저장 경로 or URL)
    
    pos_x FLOAT,  -- 위치 X
    pos_y FLOAT,  -- 위치 Y
    
    orientation_yaw FLOAT,   -- 자세 (Yaw)
    orientation_pitch FLOAT, -- 자세 (Pitch)
    orientation_roll FLOAT,  -- 자세 (Roll)
    
    battery INT,    -- 배터리 상태 (퍼센트)
    temperature FLOAT, -- 온도
    humidity FLOAT, -- 습도

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
