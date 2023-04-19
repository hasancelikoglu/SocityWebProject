import Image from "next/image";

export default function Sprinkle() {
	return (
		<div className="w-2/3 h-screen relative">
			<Image
				src="/sprinkle.svg"
				fill
				unoptimized
				className="absolute h-full w-full object-cover -z-10"
			/>
			<div className="h-full w-full flex flex-col items-center justify-center gap-y-5">
				<h1 className="text-5xl font-bold text-white-full drop-shadow-xl">
					SOCITY
				</h1>
				<p className="text-white-t font-light text-lg">
					Communicate with your friends and all the people in the world.
				</p>
			</div>
		</div>
	);
}
