// import "../styles/globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<html lang="tr">
			<body>{children}</body>
		</html>
	);
}
