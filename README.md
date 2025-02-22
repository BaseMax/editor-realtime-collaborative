# Building a Custom Real-Time Collaborative Markdown Editor

## Introduction

Welcome to the **Real-Time Collaborative Markdown Editor** project! This repository contains the backend implementation of a collaborative Markdown editor using **Node.js, Express, and Socket.IO**. The frontend can be developed using **React.js** to provide a seamless, real-time editing experience.

## Features

- **Real-Time Collaboration:** Multiple users can edit the same document simultaneously.
- **Live Markdown Preview:** Users can see rendered Markdown in real time.
- **Socket.IO Integration:** Ensures instant synchronization between users.
- **User Tracking:** Displays the number of online users.
- **Customizable Interface:** Can be extended with themes, plugins, and additional features.

## Technologies Used

- **Node.js** - JavaScript runtime environment.
- **Express.js** - Lightweight web framework.
- **Socket.IO** - WebSockets for real-time communication.
- **TypeScript** - Ensures type safety and better development experience.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/BaseMax/editor-realtime-collaborative.git
   cd editor-realtime-collaborative
   ```

2. Install dependencies:

   ```sh
   npm install  # or use bun install
   ```

3. Start the server:

   ```sh
   npm run dev  # or use bun run dev
   ```

   The server will start on port **3099**.

### Project Structure

```
editor-realtime-collaborative/
│-- src/
│   │-- config.ts            # Configuration file
│   │-- io.ts                # Handles socket.io events
│   │-- default.ts           # Default markdown content
│   │-- server.ts            # Express server setup
│-- package.json
│-- tsconfig.json
│-- README.md
```

## API & WebSocket Events

### WebSocket Events

| Event Name       | Description |
|-----------------|-------------|
| `connection`    | Triggered when a user connects. |
| `updateMarkdown` | Sends the latest Markdown content. |
| `markdownChange` | Updates Markdown content from a user. |
| `onlineUsers`   | Notifies users of the current online count. |
| `disconnect`    | Triggered when a user disconnects. |

### Example WebSocket Usage (Client-Side)

```js
const socket = io("http://localhost:3099");

socket.on("updateMarkdown", (content) => {
  console.log("Updated Content:", content);
});

socket.emit("markdownChange", "# New Markdown Content");
```

## Contributing

Contributions are welcome! Feel free to:

- Submit issues.
- Open pull requests.
- Suggest new features.

## License

This project is licensed under the **MIT License**.

## Author

**Seyyed Ali Mohammadiyeh (Max Base)**

GitHub: [@basemax](https://github.com/BaseMax)  

Email: maxbasecode@gmail.com

Happy Coding! 🚀
