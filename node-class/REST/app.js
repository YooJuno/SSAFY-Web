import express from "express";
import morgan from "morgan";
import http from "http";

const app = express();
const PORT = 8000;

app.use(morgan("dev"));

app.use(express.json());

app.get("/api/v1/hello-world", (req, res) => {
  try {
    return res.json({
      text: "준호",
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
});

app.post("/api/v1/login/", (req, res) => {
  try {
    // const id = req.params.id;
    // const pw = req.params.pw;
    const id = `${req.body.id} study`;
    const pw = req.body.pw;
    return res.json({
      id: id,
      pw: pw,
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
});

const server = http.createServer(app);

server.listen(PORT, () => console.log(`This server listening on ${PORT}`));
