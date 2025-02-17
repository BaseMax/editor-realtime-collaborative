import { Socket } from "socket.io";

let markdownContent: string = "";

export function ioConnect(socket: Socket): void {
    console.log("User connected:", socket.id);

    socket.emit("updateMarkdown", markdownContent);

    socket.on("joinRoom", (username: string) => {
        console.log(`${username} joined the room.`);
    });

    socket.on("markdownChange", (content: string) => {
        markdownContent = content;
        socket.broadcast.emit("updateMarkdown", content);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
}
