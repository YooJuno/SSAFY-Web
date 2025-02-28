// import {id, name} from "./lib.mjs"
import name from "./lib.mjs";

// console.log(id);
console.log(name);

import express from "express";
import morgan from "morgan";
import http from "http";

const app = express();
const PORT = 8000;

const menu = [
  {
    id: 1,
    name: "짜장면",
    isSoldout: true,
  },
  {
    id: 2,
    name: "짬뽕",
    isSoldout: true,
  },
  {
    id: 3,
    name: "탕수육",
    isSoldout: false,
  },
];

app.use(morgan("dev"));
app.use(express.json());

// http://localhost:8000/api/v1/add/1/2
app.get("/api/v1/add/:a/:b", (req, res) => {
  try {
    return res.json({
      result: Number(req.params.a) + Number(req.params.b),
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
});

const server = http.createServer(app);

server.listen(PORT, () => console.log(`This server is listening on ${PORT}`));
