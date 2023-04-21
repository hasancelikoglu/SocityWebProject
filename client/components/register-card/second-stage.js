export default function SecondStage({ secondStage, setSecondStage }) {
	return (
		<>
			<input
				type="text"
				placeholder="Enter a username"
				className="p-4 shadow-inner rounded-xl outline-none w-full"
				value={secondStage.username}
				onChange={(e) =>
					setSecondStage({ ...secondStage, username: e.target.value })
				}
			/>
		</>
	);
}
