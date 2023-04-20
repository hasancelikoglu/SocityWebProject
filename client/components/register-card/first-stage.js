export default function FirstStage() {
	return (
		<>
			<input
				type="text"
				placeholder="Enter your email"
				className="p-4 shadow-inner rounded-xl outline-none w-full"
			/>
			<input
				type="password"
				placeholder="Enter your password"
				className="p-4 shadow-inner rounded-xl outline-none w-full"
			/>
			<input
				type="password"
				placeholder="Enter your password again"
				className="p-4 shadow-inner rounded-xl outline-none w-full"
			/>
		</>
	);
}
