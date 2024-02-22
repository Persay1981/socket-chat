function Header({username, setUsername, setMessages}){
	const handleLogout = () => {
		setUsername("")
		setMessages([])
	}
	return(
		<div className="navbar bg-base-300">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">Socket Chat</a>
			</div>
			<div className="flex-none gap-3">
				<p className="font-bold">{username}</p>
				<button className="btn btn-error btn-sm" onClick={handleLogout}>Disconnect</button>
			</div>
		</div>
	)
}

export default Header
