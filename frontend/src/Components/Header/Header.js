
import React, { useState } from 'react'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence} from 'framer-motion'
import WAYNE from '../../Assets/WAYNE.jpg'
import { FaUserCircle } from 'react-icons/fa'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <header className='bg-gray-100 shadow-md'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center py-4'>
                {/* Profile  */}
                <div className='flex items-center'>
                    <img src={WAYNE} alt="wayne's-profile" className='w-10 h-10 rounded-full border border-gray-300' />
                    <span className='ml-3 text-xl font-semibold text-gray-700'>WAYNE'S PORTFOLIO</span>
                </div>

                {/* Navigation */}
                <nav className='hidden md:flex space-x-8 font-semibold'>
                    <a href='/home' className='text-gray-600 hover:text-gray-900'>Home</a>
                    <a href='/projects' className='text-gray-600 hover:text-gray-900'>Projects</a>
                    <a href='#skills' className='text-gray-600 hover:text-gray-900'>My Skills</a>
                    <a href='#education' className='text-gray-600 hover:text-gray-900'>Education</a>
                    <a href='#about' className='text-gray-600 hover:text-gray-900'>About Me</a>
                    <a href='#contact' className='text-gray-600 hover:text-gray-900'>Contact</a>
                    <a href='/resume.pdf' className='flex items-center text-gray-600 hover:text-gray-900'>Download Resume <FiDownload className='ml-1' /> </a>
                    <a href='/login' className='text-gray-600 hover:text-gray-900 px-4 flex flex-row items-center gap-2'><FaUserCircle />Login</a>
                    <a href='/dashboard' className='text-gray-600 hover:text-gray-900'>Dashboard</a>
                </nav>
                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-gray-600 focus:outline-none'>
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile Navigation  */}
        <AnimatePresence>
            {isOpen && (
                <motion.div
                initial={{ height: 0, opacity: 0}}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='md:hidden bg-gray-50 border-t border-gray-200'
                >
                    <nav className='flex flex-col py-4 space-y-2 font-semibold'>
                    <a href='#home' className='text-gray-600 hover:text-gray-900 px-4'>Home</a>
                    <a href='#projects' className='text-gray-600 hover:text-gray-900 px-4'>Projects</a>
                    <a href='#skills' className='text-gray-600 hover:text-gray-900 px-4'>My Skills</a>
                    <a href='#education' className='text-gray-600 hover:text-gray-900 px-4'>Education</a>
                    <a href='#about' className='text-gray-600 hover:text-gray-900 px-4'>About Me</a>
                    <a href='#contact' className='text-gray-600 hover:text-gray-900 px-4'>Contact</a>
                    <a href='/resume.pdf' className='flex items-center text-gray-600 hover:text-gray-900 px-4'>Download Resume <FiDownload className='ml-1' /> </a>
                    <a href='/login' className='text-gray-600 hover:text-gray-900 px-4 flex flex-row items-center gap-2'><FaUserCircle />Login</a>
                    <a href='/dashboard' className='text-gray-600 hover:text-gray-900'>Dashboard</a>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    </header>
  )
}

export default Header
