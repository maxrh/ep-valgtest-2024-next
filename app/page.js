"use client"

import SwipeVoter from "./components/swipeVoter";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { VoteContext } from "./context/voteContext";
import { useContext } from "react";

export default function Home() {
	const router = useRouter()
	const { politicianData } = useContext(VoteContext)
	const [startTest, setStartTest] = useState(false)

	const handleStartTest = () => {
		setStartTest(true);
	}

	const containerVariants = {
		hidden: { opacity: 1 },  // Parent starts fully visible
		visible: {
			opacity: 1,          // Parent stays fully visible
			transition: {
				staggerChildren: 0.1  // Stagger the animation of child elements
			}
		}
	};

	const childVariants = {
		hidden: { opacity: 0, y: -30 },  // Start from transparent and slightly down
		visible: { 
			opacity: 1, 
			y: 0,                // Move to original position
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
						className="max-w-3xl flex flex-col items-center justify-center text-center"
					>
						<motion.span variants={childVariants} className="text-sm font-medium text-gray-400 mb-6 flex">EP-Valgtest 2024 <span className="text-gray-700 mx-2">|</span> DEO</motion.span>
						<motion.h1 variants={childVariants} className="text-xl md:text-4xl font-bold mb-6 leading-tighter md:leading-snug">Hvem skal du stemme på til Europa-Parlamentsvalget 2024?</motion.h1>
						<motion.p variants={childVariants} className="font-light text-gray-300 text-sm md:text-base leading-normal md:leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</motion.p>
						<motion.div variants={childVariants} className="flex items-center justify-center mt-12">
							<button 
								className="mx-1 md:mx-3 group flex items-center justify-center text-xs md:text-sm font-medium text-gray-200 hover:text-gray-50 hover:shadow-xl border border-gray-700 hover:border-gray-600 transition-all py-3 md:py-4 px-6 md:px-8 rounded-full duration-300"
								onClick={handleStartTest}
							>
								Start test
							</button>
							<button 
								className="mx-1 md:mx-3 group flex items-center justify-center text-xs md:text-sm font-medium text-gray-400 hover:text-gray-300 hover:shadow-xl border border-gray-800 hover:border-gray-700 transition-all py-3 md:py-4 px-6 md:px-8 rounded-full duration-300"
								onClick={() => router.push('https://deo.dk')}
							>
								Besøg deo.dk
							</button>
						</motion.div>
					</motion.div>
					{/* grid of politicians */}

					<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-12">

					</div>
				</div>
			) : (
				<SwipeVoter />
			)}

		</main>
	);
}
