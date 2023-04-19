import Image from "next/image";

export default function Sprinkle() {
	return (
		<div className="w-2/3 h-screen relative">
			<Image
				src="/sprinkle.svg"
				fill
				unoptimized
				className="absolute h-full w-full object-cover"
			/>
		</div>
	);
}
