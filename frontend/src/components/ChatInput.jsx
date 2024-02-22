import {useState} from "react"
import { socket } from "../socket"

function ChatInput({uname, messages, setMessage}){
	const [textInput, setTextInput] = useState("")

	const handleSend = async () => {
		if(textInput){
			await socket.emit("send_message", {message: textInput, name: uname})
			setMessage(messages => [...messages,{message: textInput, name: "Me"}])
			setTextInput("")
		}
	}

	return(
		<div className="w-screen flex items-center justify-between gap-2 p-2 bg-base-300">
			<input 
				className="input input-bordered bg-base-300 grow focus:outline-none"
				placeholder="Message..."
				onChange={(e) => {setTextInput(e.target.value)}}
				onKeyDown={(e) => {e.key === "Enter" && handleSend()}}
				value={textInput}
				autoFocus
			></input>
			<button 
				className="btn btn-square btn-primary"
				onClick={handleSend}
			><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0)"> <path d="M5 12L4.39589 6.56299C4.22297 5.0067 5.82469 3.86433 7.23983 4.53465L19.1842 10.1925C20.7093 10.9149 20.7093 13.0851 19.1842 13.8075L7.23983 19.4653C5.82469 20.1357 4.22297 18.9933 4.39589 17.437L5 12ZM5 12H12" stroke="#292929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> <defs> <clipPath id="clip0"> <rect width="24" height="24" fill="black" transform="translate(0.00012207)"/> </clipPath> </defs> </svg></button>
		</div>
	)
}

export default ChatInput
