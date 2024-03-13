const express = require("express")
const { Server } = require("socket.io")
const http = require("http")
const https = require("https")
const fs = require("fs")
const cors = require("cors")

const app = express()
app.use(cors())

const options = {
	key: fs.readFileSync("./ssl/private_key.key"),
	cert: fs.readFileSync("./ssl/certificate.crt")
}

const server = http.createServer(options,app)
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
