CREATE TABLE robot_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    robot_id INT, -- 로봇 상태와 연결할 ID
    log_message TEXT, -- 로그 메시지
    log_type ENUM('INFO', 'WARNING', 'ERROR'), -- 로그 타입 (정보, 경고, 에러 등)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
