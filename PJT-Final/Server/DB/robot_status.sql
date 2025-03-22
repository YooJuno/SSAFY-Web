CREATE SCHEMA IF NOT EXISTS `robot` DEFAULT CHARACTER SET utf8mb4 ;
USE robot;
CREATE TABLE IF NOT EXISTS  `robot`.`status`(
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    
    `x` FLOAT,  -- 위치 X
    `y` FLOAT,  -- 위치 Y
    
    `yaw` FLOAT,   -- 자세 (Yaw)

    `speed` FLOAT, -- 속도
    
    `battery` INT,    -- 배터리 상태 (퍼센트)
    `temperature` FLOAT, -- 온도
    `humidity` FLOAT, -- 습도

    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


INSERT INTO `robot`.`status` (`x`, `y`, `yaw`, `battery`, `temperature`, `humidity`) 
VALUES ('0', '0', '0', '0', '0', '0');
SELECT * FROM status;