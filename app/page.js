"use client"

import SwipeVoter from "./components/swipeVoter";
import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Spinner from "./components/spinner";
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
	const [startTest, setStartTest] = useState(false)

	const handleStartTest = () => {
		setStartTest(true);
	}

	const containerVariants = {
		hidden: { opacity: 1 },  
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delay: .5,
				when: "beforeChildren",
			}
		}
	};

	const childVariants = {
		hidden: { opacity: 0, x: -20 },  // Start from transparent and slightly down
		visible: { 
			opacity: 1, 
			x: 0,
			transition: {
				duration: 0.3,
				ease: easeInOut
			}
		}
	};

	return (
		<main className="flex min-h-screen">
			{!startTest ? (
				<div className="flex flex-col items-center justify-center h-screen w-screen px-8 pt-32 pb-24 md:pb-32">
					<motion.div 
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="max-w-3xl flex flex-col items-center justify-center text-center z-10"
					>
						<motion.div 
							variants={childVariants}
							className="mb-6 flex items-center justify-center "
						>
							<Spinner />
						</motion.div>
						<motion.span variants={childVariants} className="text-base font-semibold text-gray-300 mb-4 md:mb-6 flex border-b pb-4 border-gray-300/20 px-2">EP Valgtest 2024</motion.span>
						<motion.h1 variants={childVariants} className="text-xl md:text-4xl font-bold mb-4 md:mb-6 leading-tighter md:leading-snug text-gray-50">Hvem skal du stemme på til Europa-Parlamentsvalget 2024?</motion.h1>
						<motion.p 
							variants={childVariants} 
							className="font-light text-gray-300 text-sm md:text-base leading-normal md:leading-relaxed"
						>
							Se hvilke kandidater og partier der bedst stemmer overens med dine politiske holdninger, så du kan træffe et velinformeret valg ved Europa-Parlamentsvalget i 2024. <br />
							<span className="text-xs mt-4 block">Opdateret den 28.05.24 med svar fra endnu flere kandidater.</span>
						</motion.p>
						<motion.div variants={childVariants} className="flex items-center justify-center mt-8 md:mt-14">
							<button 
								className="relative mx-1 md:mx-3 group flex items-center justify-center text-xs md:text-sm font-medium text-amber-300 hover:text-amber-300 hover:shadow-xl border-2 border-amber-300/20 hover:border-amber-300/40 transition-all py-3 md:py-4 pl-6 pr-10 md:pl-8 md:pr-12 rounded-full duration-300"
								onClick={handleStartTest}
							>
								Start test
								<svg className="w-5 h-5 text-amber-300/50 group-hover:text-amber-300/80 absolute mr-4 md:mr-5 right-0 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clipRule="evenodd"/></svg>

							</button>
							<Link 
								href="https://deo.dk"
								target="_blank"
								rel="noopener"
								className="mx-1 md:mx-3 group flex items-center justify-center text-xs md:text-sm font-medium text-gray-400 hover:text-gray-200 hover:shadow-xl border-2 border-gray-800 hover:border-gray-500 transition-all py-3 md:py-4 px-6 md:px-8 rounded-full duration-300"
							>
								Besøg deo.dk
							</Link>
						</motion.div>
					</motion.div>
					
					<motion.div 
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ 
							duration: .3,
							ease: easeInOut
						}}
						className="absolute top-0 left-0 w-full h-full -z-10 mix-blend-overlay"
					>
						<Image 
							src="/images/front-comp.jpg"
							alt="EP Valg 2024"
							width={1440}
							height={900}
							className="object-cover w-full h-full opacity-35"
							priority
						/>
					</motion.div>
				</div>
			) : (
				<SwipeVoter />
			)}
		</main>
	);
}
