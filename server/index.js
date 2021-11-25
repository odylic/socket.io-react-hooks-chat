const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const PORT = 4000;
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connected`);

  // join a conversation
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  // listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  // leave the room if the user closes the socket
  socket.on("disconnect", () => {
    console.log(`Client ${socket.id} disconnected`);
    socket.leave(roomId);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
