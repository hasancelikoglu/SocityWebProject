export default function FirstStage({ firstStage, setFirstStage }) {
	return (
		<>
			<input
				type="email"
				placeholder="Enter your email"
				className="p-4 shadow-inner rounded-xl outline-none w-full"
				value={firstStage.email}
				onChange={(e) =>
					setFirstStage({ ...firstStage, email: e.target.value })
				}
				required
			/>
			<input
				type="password"
				placeholder="Enter your password"
				className="p-4 shadow-inner rounded-xl outline-none w-full"
				value={firstStage.password}
				onChange={(e) =>
					setFirstStage({ ...firstStage, password: e.target.value })
				}
				required
			/>
			<input
				type="password"
				placeholder="Enter your password again"
				className="p-4 shadow-inner rounded-xl outline-none w-full"
				value={firstStage.passwordAgain}
				onChange={(e) =>
					setFirstStage({ ...firstStage, passwordAgain: e.target.value })
				}
				required
			/>
		</>
	);
}
