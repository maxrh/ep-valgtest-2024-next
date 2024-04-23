"use client"

import SwipeVoter from "./components/swipeVoter";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence, easeInOut, delay } from "framer-motion";
import { VoteContext } from "./context/voteContext";
import { useContext } from "react";
import Image from "next/image";

export default function Home() {
	const router = useRouter()
	const { politicianData } = useContext(VoteContext)
	const [startTest, setStartTest] = useState(false)

	const handleStartTest = () => {
		setStartTest(true);
	}

	const containerVariants = {
		hidden: { opacity: 1 },  
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1  
			}
		}
	};

	const childVariants = {
		hidden: { opacity: 0, x: -50 },  // Start from transparent and slightly down
		visible: { 
			opacity: 1, 
			x: 0,
			transition: {
				duration: 0.2,
				ease: easeInOut
			}
		}
	};

	return (
		<main className="flex min-h-screen">
			{!startTest ? (
				<div className="flex flex-col items-center justify-center h-screen w-screen p-8">
					<motion.div 
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="max-w-3xl flex flex-col items-center justify-center text-center z-10"
					>
						<motion.span variants={childVariants} className="text-sm font-medium text-gray-300 mb-6 flex">EP Valgtest 2024 <span className="text-gray-600 mx-2">|</span> DEO</motion.span>
						<motion.h1 variants={childVariants} className="text-xl md:text-4xl font-bold mb-6 leading-tighter md:leading-snug text-gray-50">Hvem skal du stemme på til Europa-Parlamentsvalget 2024?</motion.h1>
						<motion.p variants={childVariants} className="font-light text-gray-300 text-sm md:text-base leading-normal md:leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</motion.p>
						<motion.div variants={childVariants} className="flex items-center justify-center mt-12">
							<button 
								className="mx-1 md:mx-3 group flex items-center justify-center text-xs md:text-sm font-medium text-gray-200 hover:text-gray-50 hover:shadow-xl border border-gray-700 hover:border-gray-500 transition-all py-3 md:py-4 px-6 md:px-8 rounded-full duration-300"
								onClick={handleStartTest}
							>
								Start test
								<svg className="w-5 h-5 text-gray-500 group-hover:text-gray-300 ml-2 -mr-3  transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clipRule="evenodd"/></svg>

							</button>
							<button 
								className="mx-1 md:mx-3 group flex items-center justify-center text-xs md:text-sm font-medium text-gray-500 hover:text-gray-200 hover:shadow-xl border border-gray-800 hover:border-gray-500 transition-all py-3 md:py-4 px-6 md:px-8 rounded-full duration-300"
								onClick={() => router.push('https://deo.dk')}
							>
								Besøg deo.dk
							</button>
						</motion.div>
					</motion.div>



				</div>
			) : (
				<SwipeVoter />
			)}

		</main>
	);
}
