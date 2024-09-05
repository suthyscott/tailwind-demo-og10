import { FaSearch, FaShoppingCart } from "react-icons/fa"
import { MdAccountCircle } from "react-icons/md"
import { GiFullMotorcycleHelmet, GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <nav className="flex lg:hidden justify-between items-center h-[10vh] px-5 bg-primary-dark text-highlight">
                <GiFullMotorcycleHelmet />
                <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} />

                {showMenu && (
                    <div className="absolute left-0 top-[10vh] bg-primary-dark h-[90vh] w-full flex flex-col items-center">
                        <div className="flex flex-col w-1/3 justify-between items-center mb-4">
                            <button>Hypersport</button>
                            <button>Naked Sport</button>
                            <button>Cruisers</button>
                        </div>
                        <div className="flex w-1/4 justify-evenly">
                            <FaSearch />
                            <FaShoppingCart />
                            <MdAccountCircle />
                        </div>
                    </div>
                )}
            </nav>

            <nav className="hidden lg:flex justify-between items-center h-[10vh] px-5 bg-primary-dark text-highlight">
                <div className="flex w-1/3 justify-between items-center">
                    <GiFullMotorcycleHelmet />
                    <button>Hypersport</button>
                    <button>Naked Sport</button>
                    <button>Cruisers</button>
                </div>
                <div className="flex w-1/4 justify-evenly">
                    <FaSearch />
                    <FaShoppingCart />
                    <MdAccountCircle />
                </div>
            </nav>
        </>
    )
}

export default Header
