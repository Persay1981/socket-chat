import {useState} from "react"

function Login({setUsername}){
	const [textInput, setTextInput] = useState("")

	const handleSubmit = () => {
		setUsername(textInput)
	}

	return(
		<div className="flex items-center justify-center h-svh">
			<div className="p-6 flex items-center justify-center gap-4 bg-base-300 rounded-lg">
				<input
					placeholder="Name..."
					onChange={(e) => {setTextInput(e.target.value)}}
					className="input input-bordered bg-base-300 focus:outline-none"
				></input>
				<button className="btn btn-primary" onClick={handleSubmit}>Connect</button>
			</div>
		</div>
	)
}

export default Login
