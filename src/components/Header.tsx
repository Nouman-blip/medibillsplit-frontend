import { useState } from 'react'
import { Link } from 'react-router'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 py-4"
    >
      <div className="container mx-auto px-4">
        <div className="bg-medibill-card/80 backdrop-blur-lg rounded-full border border-white/10 px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo and Desktop Navigation */}
            <div className="flex items-center space-x-12">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-medibill-blue to-medibill-purple flex items-center justify-center">
                  <span className="font-bold text-white">M</span>
                </div>
                <span className="font-bold text-xl text-white">MediBillSplit</span>
              </Link>
              <nav className="hidden md:block">
                <ul className="flex space-x-8">
                  <li>
                    <Link 
                      to="/demo" 
                      className="text-medibill-muted hover:text-white transition-colors"
                    >
                      How it Works
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="#features" 
                      className="text-medibill-muted hover:text-white transition-colors"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/pricing" 
                      className="text-medibill-muted hover:text-white transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Desktop Buttons and Mobile Hamburger */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" className="text-medibill-text">
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button className="bg-medibill-blue hover:bg-medibill-blue/90">
                  <Link to="/checkout">Try Free</Link>
                </Button>
              </div>
              <button 
                onClick={toggleMobileMenu}
                className="md:hidden text-medibill-text focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    // When open, show the "X" icon inside the toggle as well.
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    // Hamburger icon when closed.
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay with Slide-Down Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-medibill-card/95 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            {/* Dedicated Close (X) Button */}
            <button
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 text-medibill-text focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav>
              <ul className="space-y-8 text-center">
                <li>
                  <Link 
                    to="/demo" 
                    onClick={toggleMobileMenu}
                    className="text-medibill-muted hover:text-white transition-colors text-2xl"
                  >
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link 
                    to="#features" 
                    onClick={toggleMobileMenu}
                    className="text-medibill-muted hover:text-white transition-colors text-2xl"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/pricing" 
                    onClick={toggleMobileMenu}
                    className="text-medibill-muted hover:text-white transition-colors text-2xl"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="mt-10 space-y-6 w-full max-w-xs px-4">
              <Button 
                variant="ghost" 
                className="w-full text-medibill-text"
                onClick={toggleMobileMenu}
              >
                <Link to="/login">Sign In</Link>
              </Button>
              <Button 
                className="w-full bg-medibill-blue hover:bg-medibill-blue/90"
                onClick={toggleMobileMenu}
              >
                <Link to="/checkout">Try Free</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
