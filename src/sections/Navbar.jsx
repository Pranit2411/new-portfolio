import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

function Navigation() {
    return <ul className='nav-ul'>
        <li className='nav-li'>
            <a className='nav-link' href="#home">Home</a>
        </li>
        <li className='nav-li'>
            <a className='nav-link' href="#about">About</a>
        </li>
        <li className='nav-li'>
            <a className='nav-link' href="#project">Projects</a>
        </li>
        <li className='nav-li'>
            <a className='nav-link' href="#work">Work</a>
        </li>
        <li className='nav-li'>
            <a className='nav-link' href="#contact">Contact</a>
        </li>
    </ul>
}
const Navbar = () => {

    const[isOpen, setIsOpen] = useState(false);   

    return (
        <div className="fixed inset-x-0 top-0 w-full backdrop-blur-lg bg-primary/40 z-20">
            <div className="mx-auto px-4 max-w-7xl">
                <div className="flex items-center w-full py-2 sm:py-0">
                    <a href="/" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
                        Pranit
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="ml-auto flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
                    >
                        <img
                        src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                        className="w-6 h-6"
                        alt="Menu"
                        />
                    </button>
                    <nav className="hidden sm:flex ml-auto">
                        <Navigation />
                    </nav>
                </div>
            </div>
        {isOpen && (
            <motion.div
            className="block overflow-hidden text-center sm:hidden"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ maxHeight: "100vh" }}
            transition={{ duration: 0.5 }}
            >
            <nav className="pb-5">
                <Navigation />
            </nav>
            </motion.div>
        )}
        </div>


        
    )
};

export default Navbar;