import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/ui/siteHeader";
import VoteContextProvider from "./context/voteContext";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "EP Valgtest 2024 | DEO",
	description: "Hvem skal du stemme på til EP-valget 2024? Find ud af det her!",
}

export default function RootLayout({ children }) {
	return (
		<html lang="da">
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
