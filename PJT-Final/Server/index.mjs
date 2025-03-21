/*
.mjs?
- ES Modules 문법의 JavaScript를 의미
- 즉, JavaScript는 신, 구 두 가지 버전의 문법이 있음
- ES Module 문법이 신버전임
*/

import express from "express"; // Express.js
import morgan from "morgan"; // 서버 상세 로그 출력
import http from "http";
import pool from "./DB/db.js"

const PORT = 8000; // 8000번 포트 개방

const app = express(); // 서버 앱
app.use(morgan("dev")); // 개발용 로그

// [ GET ]
// 단순 조회
app.get("/api/v1/status", (req, res) => {
  try {
    return res.json({});
  } catch (error) {
    return res.json({
      error: error.message,
    });
  }
});

// [ POST ]
// 서버에 새로운 데이터 생성
app.post("/api/v1/", (req, res) => {
  try {
    return res.json({});
  } catch (error) {
    return res.json({
      error: error.message,
    });
  }
});

// [ PATCH ]
// 기존 단일 데이터 수정.
app.patch("/api/v1/", (req, res) => {
  try {
    return res.json({});
  } catch (error) {
    return res.json({
      error: error.message,
    });
  }
});

// [ DELETE ]
// (단일, 전체) 데이터 삭제.
app.delete("/api/v1/", (req, res) => {
  try {
    return res.json({});
  } catch (error) {
    return res.json({
      error: error.message,
    });
  }
});

const server = http.createServer(app); // HTTP 서버 생성
server.listen(PORT, () => console.log(`Listening on ${PORT}`)); // 서버 동작

/*
[ 성공 ]
200
- OK
- return res.json()의 디폴트

201
- POST 요청으로 데이터가 생성 (Created)
- PATCH 요청으로 데이터가 수정 (Edited)

204
- No Content
- 삭제 성공 (DELETE)
- 응답 바디가 없기 때문에 res.status(204).json()

[ 리다이렉션 ]
304
- Not Modified
- 저장된 캐시 기반으로 요청이 처리됐음.
- 동일한 내용을 매번 서버에서 리턴하는 것을 방지하기 위해 브라우저에서 처리.
- "캐시 비우기 및 강력 새로고침" 을 하면, 304 가 아닌 200 이 발생.

[ 클라이언트 오류 ]
400
- Bad Request
- 경로는 맞는데... 요청 형태가 적합하지 않음

401
- Unauthorized
- 권한 없는 사용자의 접근

404
- Not Found
- 경로에 데이터가 없음. 존재하지 않음

451
- Unavailable for Legal Reasons
- 특정 국가에서 법적인 사유로 접근할 수 없을 경우

[ 서버 오류 ]
500
- Internal Server Error
- 서버가 현재 서비스를 제공하기 적합하지 않은 상태.

503
- Service Temporarily Unavailable
- 현재 요청이 지나치게 많아 서비스를 할 수 없는 경우.
*/
