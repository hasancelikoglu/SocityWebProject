"use client";

import Link from "next/link";
import { useState } from "react";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import FirstStage from "./first-stage";
import SecondStage from "./second-stage";

export default function RegisterCard() {
	const [stage, setStage] = useState(1);
	const [firstStage, setFirstStage] = useState({
		email: "",
		password: "",
		passwordAgain: "",
	});
	const [secondStage, setSecondStage] = useState({
		username: "",
	});
	const submitHandle = (e) => {
		if (stage === 2) {
			alert("kayıt başarılı");
		} else {
			if (firstStage.password !== firstStage.passwordAgain) {
				alert("Şifreler uyuşmuyor");
			} else {
				setStage(2);
			}
		}
		e.preventDefault();
	};

	const backHandle = (e) => {
		if (stage !== 1) {
			e.preventDefault();
			setStage(1);
		}
	};
	return (
		<div className="w-[500px] h-full py-16 flex flex-col justify-between px-5 m-5">
			<div>
				<Link href="/" onClick={backHandle} className="text-white-full">
					<IoArrowBack size={20} />
				</Link>
			</div>
			<div className="w-full flex flex-col gap-y-10">
				<h1 className="text-center text-white-full text-2xl font-light">
					{stage === 1 ? "Register to app" : "Choose a username"}
				</h1>
				<form
					onSubmit={submitHandle}
					className="flex flex-col w-full items-center gap-y-5"
				>
					{stage === 1 ? (
						<FirstStage firstStage={firstStage} setFirstStage={setFirstStage} />
					) : (
						<SecondStage
							secondStage={secondStage}
							setSecondStage={setSecondStage}
						/>
					)}
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
					Or do you have an account ?
				</Link>
			</div>
		</div>
	);
}
