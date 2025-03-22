CREATE SCHEMA IF NOT EXISTS `robot` DEFAULT CHARACTER SET utf8mb4 ;
USE robot;

CREATE TABLE IF NOT EXISTS  `robot`.`logs`(
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `robot_id` VARCHAR(20), -- 로봇 상태와 연결할 ID
    `log_message` TEXT, -- 로그 메시지
    `log_type` ENUM('INFO', 'WARNING', 'ERROR'), -- 로그 타입 (정보, 경고, 에러 등)
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO `robot`.`logs` (`robot_id`, `log_message`, `log_type`) VALUES ('junobot1', '잘 작동중', '1');
INSERT INTO `robot`.`logs` (`robot_id`, `log_message`, `log_type`) VALUES ('junobot2', '잘 작동중', '1');
INSERT INTO `robot`.`logs` (`robot_id`, `log_message`, `log_type`) VALUES ('junobot1', '서버 연결 끊김', '3');

SELECT * FROM logs;