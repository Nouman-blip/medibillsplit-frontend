import {Link} from 'react-router'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 py-4"
    >
      <div className="container mx-auto px-4">
        <div className="bg-medibill-card/80 backdrop-blur-lg rounded-full border border-white/10 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
                <Link to="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-medibill-blue to-medibill-purple flex items-center justify-center">
                    <span className="font-bold text-white">M</span>
                  </div>
                  <span className="font-bold text-xl text-white">MediBillSplit</span>
                </Link>
           
              <nav className="hidden md:block">
                <ul className="flex space-x-8">
                    <li><Link to="/demo" className="text-medibill-muted hover:text-white transition-colors">How it Works</Link></li>
                    <li><Link to="#features" className="text-medibill-muted hover:text-white transition-colors">Features</Link></li>
                    <li><Link to="/pricing" className="text-medibill-muted hover:text-white transition-colors">Pricing</Link></li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-medibill-text">
                <Link to='/login'>
                  Sign In
                </Link>
              </Button>
              <Button className="bg-medibill-blue hover:bg-medibill-blue/90">
                <Link to='/checkout'>
                  Try Free
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header

