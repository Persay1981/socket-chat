import { useEffect, useState } from "react"
import { socket } from "./socket"

import Login from "./components/Login"
import ChatInput from "./components/ChatInput"
import ChatBody from "./components/ChatBody"

function App() {
	const [username, setUsername] = useState("")
	const [messages, setMessages] = useState([])

	useEffect(() => {
		socket.off("receieve_message").on("receieve_message", (message) => {
			setMessages(messages => [...messages,message])
		})
	}, [socket])

	return(
		<>
			{!username && <Login setUsername={setUsername}/>}
			{username && 
				<div className="h-svh flex flex-col items-center justify-between">
					<ChatBody messages={messages} className="grow"/>
					<ChatInput uname={username} setMessage={setMessages} messages={messages} className="bottom-0"/>
				</div>
			}
		</>
	)
}

export default App
