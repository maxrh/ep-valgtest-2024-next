import Link from "next/link"
import Image from "next/image"

export default function SiteHeader() {
    return (
        <header className="px-14 pt-14 pb-5 flex flex-col items-center absolute top-0 left-0 w-full z-50  ">
            <div className="flex justify-between items-center max-w-screen-3xl w-full h-full">
                <div className="site-logo flex items-center flex-shrink-0 mr-auto">
                    <Link href="/" className="flex items-center w-28 h-10">
                        <Image src="/deo_logo_2022.png" width={494} height={174} alt="DEO Logo" />
                    </Link>
                </div>
            </div>
        </header>
    )
}
