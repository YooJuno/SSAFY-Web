-- [테이블 날리는 방법]
DROP TABLE ssafy.member;

-- 1. Table 생성 
-- ssafy DB 안에 있는 member table 생성
CREATE TABLE
    `ssafy`.`member` (
        `member_id` INT NOT NULL AUTO_INCREMENT, -- 회원의 고유 ID, 자동 증가(AUTO_INCREMENT)되는 정수 값
        `username` VARCHAR(20) NOT NULL, -- 회원의 이름, 최대 20자까지 저장 가능, NULL 값 허용 안 됨
        `age` INT NULL, -- 회원의 나이, 정수형(INT), NULL 값 허용 (입력하지 않아도 됨)
        `budget` BIGINT NULL,
        PRIMARY KEY (`member_id`) -- 기본 키(PRIMARY KEY) 설정, `member_id`는 고유해야 하며 중복 불가
    );

-- 2. 테이블 구조 확인 (컬럼 정보, 데이터 타입, 제약 조건 확인)
--> description
-- +-----------+-------------+------+-----+---------+----------------+
-- | Field     | Type        | Null | Key | Default | Extra          |
-- +-----------+-------------+------+-----+---------+----------------+
-- | member_id | int         | NO   | PRI | NULL    | auto_increment |
-- | username  | varchar(20) | NO   |     | NULL    |                |
-- | age       | int         | YES  |     | NULL    |                |
-- | budget    | bigint      | YES  |     | NULL    |                |
-- +-----------+-------------+------+-----+---------+----------------+
DESC ssafy.member;

-- 3. 테이블에 저장된 모든 데이터 조회
-- +-----------+----------+------+--------+
-- | member_id | username | age  | budget |
-- +-----------+----------+------+--------+
-- |         1 | juno     |   28 |   NULL |
-- |         2 | dayu     |   28 |   NULL |
-- |         3 | joro     |  220 |   NULL |
-- +-----------+----------+------+--------+
SELECT
    *
FROM
    ssafy.member;

-- 4. 필드 내용 추가
--> ssafy DB 안에 있는 member Table 안에 있는 username, age Field 내용 추가
--> member_id는 놔두는 이유? => PK는 자동 증가해서 보통은 놔둠
-- +-----------+----------+------+--------+
-- | member_id | username | age  | budget |
-- +-----------+----------+------+--------+
-- |         1 | juno     |   28 |   NULL |
-- |         2 | dayu     |   28 |   NULL |
-- |         3 | joro     |  220 |   NULL |
-- |         4 | juno     |   28 |   NULL |
-- |         5 | dayu     |   28 |   NULL |
-- |         6 | joro     |  220 |   NULL |
-- +-----------+----------+------+--------+
INSERT INTO
    `ssafy`.`member` (`username`, `age`)
VALUES
    ('juno', 28);

INSERT INTO
    `ssafy`.`member` (`username`, `age`)
VALUES
    ('dayu', 28);

INSERT INTO
    `ssafy`.`member` (`username`, `age`)
VALUES
    ('joro', 220);

-- 5. 세부 내용 조회 [SELECT]
-- `member` 테이블에서 최대 1000개의 모든 데이터를 조회
SELECT
    *
FROM
    ssafy.member
LIMIT
    1000;

-- `member` 테이블에서 `username`과 `age` 컬럼만 조회, 최대 1000개까지 가져옴
SELECT
    username,
    age
FROM
    ssafy.member
LIMIT
    1000;

-- `member` 테이블에서 `member_id`가 3인 회원의 데이터를 조회
-- bool 판단은 '=' 하나만!
SELECT
    *
FROM
    ssafy.member
WHERE
    member_id = 3;

--
-- 6. Update
--> set
UPDATE ssafy.member
SET
    username = '민호',
    age = 10
WHERE
    member_id = 1;

--> SORTING
SELECT * FROM ssafy.member ORDER BY username;
SELECT * FROM ssafy.member ORDER BY age DESC;

-- >delete
DELETE FROM ssafy.member
WHERE
    member_id = 1;