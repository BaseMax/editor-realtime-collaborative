import { Socket } from "socket.io";
import { DEFAULT_CODE } from "./default";

let markdownContent: string = DEFAULT_CODE;
let onlineUsers: number = 0;

export function ioConnect(socket: Socket): void {
  onlineUsers++;
  console.log("User connected:", socket.id);

  socket.emit("updateMarkdown", markdownContent);
  socket.emit("onlineUsers", onlineUsers);
  socket.broadcast.emit("onlineUsers", onlineUsers);

  socket.on("joinRoom", (username: string) => {
    console.log(`${username} joined the room.`);
  });

  socket.on("markdownChange", (content: string) => {
    markdownContent = content;
    socket.broadcast.emit("updateMarkdown", content);
  });

  socket.on("disconnect", () => {
    onlineUsers--;
    console.log("User disconnected:", socket.id);
    socket.broadcast.emit("onlineUsers", onlineUsers);
  });
}
