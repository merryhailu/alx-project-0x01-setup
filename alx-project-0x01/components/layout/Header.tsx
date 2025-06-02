import Link from "next/link"
import Image from "next/image"

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div className="flex items-center py-4 px-2">
                            <Link href="/">
                                <Image src="/logo.png" alt="logo" width={32} height={32} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;