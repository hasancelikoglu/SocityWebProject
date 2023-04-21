"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

export default function LoginCard() {
	return (
		<div className="w-[500px] h-full py-16 flex flex-col justify-between px-5 m-5">
			<div>
				<Link href="/" className="text-white-full">
					<IoArrowBack size={20} />
				</Link>
			</div>
			<div className="w-full flex flex-col gap-y-10">
				<h1 className="text-center text-white-full text-2xl font-light">
					Login to app
				</h1>
				<form className="flex flex-col w-full items-center gap-y-5">
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
					<button
						type="submit"
						className="text-dark bg-white-full p-3 rounded-xl"
					>
						<IoArrowForward size={20} />
					</button>
				</form>
			</div>

			<div className="flex flex-col items-center justify-center gap-y-3">
				<Link
					href="/"
					className="text-white-t font-light border-b border-b-white-t text-sm"
				>
					Don't have an account? let's create!
				</Link>
				<Link
					href="/"
					className="text-white-t font-light border-b border-b-white-t text-sm"
				>
					Forgot password?
				</Link>
			</div>
		</div>
	);
}
