import { useEffect, useState } from "react"
import { socket } from "./socket"

import Login from "./components/Login"
import ChatInput from "./components/ChatInput"
import ChatBody from "./components/ChatBody"
import Header from "./components/Header"

function App() {
	const [username, setUsername] = useState("")
	const [messages, setMessages] = useState([])
	const [groupChatName,setGroupChat] = useState("")

	useEffect(() => {
		socket.off("receive_message").on("receive_message", (message) => {
			setMessages(messages => [...messages,message])
		})
	}, [socket])

	//console.log(messages)

	return(
		<>
			{!username && <Login setUsername={setUsername} setGroupChat={setGroupChat}/>}
			{username && 
				<div className="h-svh flex flex-col items-center justify-between">
					<Header username={username} setUsername={setUsername} setMessages={setMessages} groupChat={groupChatName}/>
					<ChatBody messages={messages} className="grow"/>
					<ChatInput uname={username} setMessage={setMessages} messages={messages} groupChat={groupChatName} className="bottom-0"/>
				</div>
			}
		</>
	)
}

export default App
