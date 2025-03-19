import express from "express";
import http from "http";
import net from "net";
import { WebSocketServer } from "ws";

const app = express();
const WEB_PORT = 8000;
const TCP_SOCKET_PORT = 9000;

// REST 함수가 들어갈 영역
// ...
// ...

const server = http.createServer(app);

const wss = new WebSocketServer({ server });

let tcpSocketClients = []; // TCP Socket 클라이언트를 저장할 배열
let webSocketClients = []; // Web Socket 클라이언트를 저장할 배열

// TCP Socket 서버 설정
const tcpSocketServer = net.createServer((socket) => {
  console.log("TCP Socket client connected");

  tcpSocketClients.push(socket);

  socket.on("data", (data) => {
    tcpSocketClients.forEach((tcpSocketClient) => {
      if (tcpSocketClient !== socket) {
        tcpSocketClient.write(data);
      }
    });

    webSocketClients.forEach((webSocketClient) => {
      webSocketClient.send(data);
    });
  });

  socket.on("end", () => {
    console.log("TCP client disconnected");
    tcpSocketClients = tcpSocketClients.filter(
      (tcpSocketClient) => tcpSocketClient !== socket
    );
  });
});

wss.on("connection", (ws) => {
  console.log("Web Socket client connected");

  webSocketClients.push(ws);

  ws.on("message", (message) => {
    webSocketClients.forEach((webSocketClient) => {
      webSocketClient.send(message);
    });

    tcpSocketClients.forEach((tcpSocketClient) => {
      tcpSocketClient.write(message);
    });
  });

  ws.on("close", () => {
    console.log("Web Socket client disconnected");

    webSocketClients = webSocketClients.filter(
      (webSocketClient) => webSocketClient !== ws
    );
  });
});

tcpSocketServer.listen(TCP_SOCKET_PORT, () => {
  console.log(`TCP Socket server listening on port ${TCP_SOCKET_PORT}`);
});

server.listen(WEB_PORT, () => {
  console.log(`Web server listening on port ${WEB_PORT}`);
});
