import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";

import { PORT } from './config';
import { ioConnect } from './io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", ioConnect);
server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
