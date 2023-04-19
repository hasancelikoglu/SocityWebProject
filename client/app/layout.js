import "../styles/global.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<html lang="tr">
			<body className="bg-dark">{children}</body>
		</html>
	);
}
