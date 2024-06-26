"use client"

import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'

export default function SiteHeader() {
    const router = useRouter();

    const handleLogoClick = (e) => {
        // Check if the current pathname is the homepage
        if (router.pathname === '/') {
            e.preventDefault();  // Prevent default if it's a link
            router.reload(); // Reload the current page
        } else {
            router.push('/');  // Use router to navigate to homepage
        }
    };

    return (
        <header className="px-8 pt-8 md:px-14 md:pt-14 pb-5 flex flex-col items-center absolute top-0 left-0 w-full z-50 ">
            <div className="flex justify-between items-center max-w-screen-3xl w-full h-full">
                <div className="site-logo flex items-center flex-shrink-0 mr-auto">
                    <a href="/" onClick={handleLogoClick} className="flex items-center w-24 h-8 md:w-28 md:h-10 pointer-events-auto">
                        <motion.svg 
                            version="1.1" 
                            id="Layer_1" 
                            xmlns="http://www.w3.org/2000/svg" 
                            x="0px" 
                            y="0px" 
                            viewBox="0 0 500 175" 
                            className="w-24 h-8 md:w-28 md:h-10 fill-white"
                        >
                            <g>
                                <path className="st0" d="M3.99,171.77h68.61c18.8,0,34.94-3.35,48.41-10.04c13.47-6.69,23.75-16.38,30.84-29.05
                                    c7.09-12.67,10.64-27.77,10.64-45.3c0-17.37-3.59-32.39-10.76-45.07c-7.17-12.67-17.49-22.35-30.96-29.05
                                    C107.31,6.57,91.25,3.23,72.61,3.23H3.99V171.77L3.99,171.77z M47.98,136.39V38.61H69.5c16.57,0,28.93,4.03,37.06,12.07
                                    c8.13,8.05,12.19,20.28,12.19,36.7c0,16.42-4.06,28.69-12.19,36.82c-8.13,8.13-20.48,12.19-37.06,12.19H47.98L47.98,136.39z
                                    M307.89,171.77v-33.95h-76.98v-34.91h72.2V69.21h-72.2V37.17h76.98V3.23H188.12v168.55H307.89L307.89,171.77z"/>
                                <path className="st0" d="M411.85,173.93c17.05,0,31.92-3.54,44.59-10.64c12.67-7.09,22.43-17.13,29.29-30.12
                                    c6.85-12.99,10.28-28.25,10.28-45.78c0-17.53-3.39-32.79-10.16-45.78c-6.78-12.99-16.5-22.99-29.17-30
                                    c-12.67-7.01-27.61-10.52-44.83-10.52c-17.21,0-32.16,3.51-44.83,10.52c-12.67,7.02-22.44,17.02-29.29,30
                                    c-6.85,12.99-10.28,28.25-10.28,45.78c0,17.53,3.43,32.79,10.28,45.78c6.85,12.99,16.62,23.03,29.29,30.12
                                    C379.7,170.38,394.64,173.93,411.85,173.93L411.85,173.93L411.85,173.93z M411.85,140.22c-12.75,0-22.71-4.46-29.88-13.39
                                    c-7.17-8.92-10.76-22.07-10.76-39.45c0-17.37,3.59-30.48,10.76-39.33c7.17-8.85,17.13-13.27,29.88-13.27
                                    c12.59,0,22.51,4.46,29.77,13.39c7.25,8.93,10.88,21.99,10.88,39.21s-3.59,30.33-10.76,39.33
                                    C434.57,135.71,424.6,140.22,411.85,140.22L411.85,140.22L411.85,140.22z"/>
                            </g>
                        </motion.svg>
                    </a>
                </div>
            </div>
        </header>
    )
}
