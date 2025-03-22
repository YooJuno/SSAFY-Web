CREATE SCHEMA IF NOT EXISTS `robot` DEFAULT CHARACTER SET utf8mb4 ;
USE robot;
CREATE TABLE IF NOT EXISTS  `robot`.`images`(
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    
    `image_url` VARCHAR(255), -- 이미지 경로 (저장 경로 or URL)

    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `robot`.`images` (`image_url`) VALUES ('~/images/image1.png');
SELECT * FROM images;