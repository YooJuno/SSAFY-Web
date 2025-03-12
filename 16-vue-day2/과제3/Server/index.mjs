import express from "express";
import http from "http";
import { WebSocketServer } from "ws";

const app = express();
const WEB_PORT = 8000;

// REST 함수가 들어갈 영역
// ... 
// ...

const server = http.createServer(app);

const wss = new WebSocketServer({ server });

let webSocketClients = []; // Web Socket 클라이언트를 저장할 배열

// Web Socket 서버 설정
wss.on("connection", (ws) => {
  console.log("Web Socket client connected");

  // WebSocket 클라이언트 목록에 추가
  webSocketClients.push(ws);

  ws.on("message", (message) => {
    // console.log("Received from Web Socket client: ", message.toString());

    // Web Socket 클라이언트에게 브로드캐스트 (대시보드 => 대시보드)
    webSocketClients.forEach((webSocketClient) => {
      // 자기자신한테 안 보내기
      if (webSocketClient !== ws) {
        webSocketClient.send(message);
      }
    });
  });

  ws.on("close", () => {
    console.log("Web Socket client disconnected");
    // Web Socket 클라이언트 목록에서 제거
    webSocketClients = webSocketClients.filter(
      (webSocketClient) => webSocketClient !== ws
    );
  });
});

// Web 서버 시작 (REST + Web Socket)
server.listen(WEB_PORT, () => {
  console.log(`Web server listening on port ${WEB_PORT}`);
});
