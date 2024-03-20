const express = require("express")
const { Server } = require("socket.io")
const http = require("http")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/", (req, res)=>{
	res.send("Server Running")
})

const server = http.createServer(app)
const io = new Server(server,{
	cors: {
		origin: "http://localhost:5173",
	}
})

io.on("connection", (socket) => {
	socket.on("send_message", (message) => {
		socket.broadcast.emit("receieve_message", message)
	})
})

server.listen(5000,()=>{
	console.log("Running on port 5000")
})
