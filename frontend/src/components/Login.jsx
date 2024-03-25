import {useState} from "react"
import { socket } from "../socket"

function Login({setUsername,setGroupChat}){
	const [textInput, setTextInput] = useState("")
	const [groupInput, setGroupInput] = useState("")

	const handleSubmit = () => {
		textInput && setUsername(textInput)
		if(groupInput){
			setGroupChat(groupInput)
			socket.emit('join',groupInput)
		}
	}

	return(
		<div className="flex items-center justify-center h-svh">
			<div className="p-4 sm:p-6 flex items-center justify-center gap-4 bg-base-300 rounded-lg">
				<input
					placeholder="Name..."
					onChange={(e) => {setTextInput(e.target.value)}}
					className="input input-bordered bg-base-300 focus:outline-none"
					autoFocus
				></input>
				<input
					placeholder="Group Name..."
					onChange={(e) => {setGroupInput(e.target.value)}}
					className="input input-bordered bg-base-300 focus:outline-none"
					onKeyDown={(e) => {e.key === "Enter" && handleSubmit()}}
					autoFocus
				></input>
				<button className="btn btn-primary" onClick={handleSubmit}>Connect</button>
			</div>
		</div>
	)
}

export default Login
