import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/ui/siteHeader";
import VoteContextProvider from "./context/voteContext";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Hvem skal du stemme på til Europa-Parlamentsvalget 2024? | EP Valgtest 2024 | DEO",
  	description: "Tag DEO's kandidattest og træf et velinformeret valg!",
  	applicationName: "EP Valgtest 2024 | DEO",
	keywords: [
		'Europa-Parlamentet', 'Europa-Parlamentsvalg', 'Kandidattest', 'Valgtest', 'EU-valg', 'EP-valget',
		'EU-parlamentsvalg', 'EU-kandidattest', 'EU-valgtest', 'EP-kandidattest', 'European Parliament', 
		'European Parliament election', 'Candidate test', 'Election test', 'EU election', 'EP election', 
		'Valgguide', 'Vælgerguide', 'Valg information', 'Vælgere', 'Politiske partier', 'Politikere', 
		'Valgresultater', 'Valgdeltagelse', 'EP-valg 2024', 'EU-valg 2024', 'Europa-Parlamentsvalg 2024', 
		'2024 EP election', '2024 EU election', 'Stemmeret', 'Valgkampagne', 'Politisk test', 'Stemmeseddel', 
		'Valgstemning', 'Valgkandidater', 'Valginformation', 'Valgundersøgelse'
	],
 	openGraph: {
		title: "Hvem skal du stemme på til Europa-Parlamentsvalget 2024? | EP Valgtest 2024 | DEO",
		description: "Tag DEO's kandidattest og træf et velinformeret valg!",
		siteName: "EP Valgtest 2024 | DEO",
		type: 'website',
		locale: 'da_DK',
		url: "https://www.ep-valgtest2024.dk"
	}
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
				<Analytics/>
			</body>
		</html>
	);
}
