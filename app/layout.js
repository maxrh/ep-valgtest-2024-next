import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/ui/siteHeader";
import VoteContextProvider from "./context/voteContext";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<VoteContextProvider>
					<SiteHeader />
					{children}
				</VoteContextProvider>
				<SpeedInsights/>
			</body>
		</html>
	);
}
