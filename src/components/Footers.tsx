import { Link } from "react-router-dom"
import { IconText } from "./ui/IconText"
import { Mail, Github, Twitter, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative py-20 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-medibill-dark/50 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-4">MediBillSplit</h3>
            <p className="text-medibill-muted mb-6">Simplifying medical bill management for families worldwide.</p>
            <div className="space-y-4">
              <IconText icon={Mail} text="support@medibillsplit.com" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "Security", "Updates"].map((item) => (
                  <li key={item}>
                    
                      <Link to="#" className="text-medibill-muted hover:text-white transition-colors">
                      {item}
                      </Link>
                    
                  
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                  <li key={item}>
                  
                    <Link to="#" className="text-medibill-muted hover:text-white transition-colors">
                        {item}
                    </Link>
                  
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Terms", "Privacy", "HIPAA", "Cookies"].map((item) => (
                <li key={item}>
                  
                      <Link to="#" className="text-medibill-muted hover:text-white transition-colors">
                      {item}
                      </Link>
                  
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-medibill-muted text-sm mb-4 md:mb-0">© 2024 MediBillSplit. All rights reserved.</p>
          <div className="flex space-x-4">
            {[Github, Twitter, Linkedin].map((Icon, index) => (
              
                <Link key={index} to="#" className="text-medibill-muted hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </Link>
              
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

