import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
	metadataBase: new URL("https://www.vercel.app"),
	title: "Distributed Applications Week 1",
	description:
		"Week 1 assignment for Distributed Applications course at Fulda Hochschule",
};

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.variable}>{children}</body>
		</html>
	);
}
