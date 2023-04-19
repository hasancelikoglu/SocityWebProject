import Link from "next/link";

export default function LoginCard() {
	return (
		<div className="w-1/3 px-20 h-3/5 flex flex-col justify-between p-10">
			<h1 className="text-center text-white-full text-xl font-light">
				Login to app
			</h1>
			<form className="flex flex-col gap-y-5">
				<input
					type="text"
					placeholder="Enter your email"
					className="p-4 shadow-inner rounded-xl outline-none"
				/>
				<input
					type="text"
					placeholder="Enter your password"
					className="p-4 shadow-inner rounded-xl outline-none"
				/>
				<button type="submit" className="text-white-full">
					Giriş Yap
				</button>
			</form>

			<div className="flex flex-col items-center justify-center gap-y-3">
				<Link
					href="/"
					className="text-white-t font-light border-b border-b-white-t"
				>
					Don't have an account? let's create!
				</Link>
				<Link
					href="/"
					className="text-white-t font-light border-b border-b-white-t"
				>
					Forgot password?
				</Link>
			</div>
		</div>
	);
}
