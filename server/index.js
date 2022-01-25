const server = require("http").createServer()
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
})
const log = console.log

const registerMessageHandlers = require("./handlers/messageHandlers")

const onConnection = (socket) => {
  log("User connected")

  const { roomId } = socket.handshake.query

  log("roomId=", roomId)

  socket.roomId = roomId

  socket.join(roomId)

  registerMessageHandlers(io, socket)

  socket.on("disconnect", () => {
    log("User disconnected")
    socket.leave(roomId)
  })
}

io.on("connection", onConnection)

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server ready. Port: ${PORT}`)
})
