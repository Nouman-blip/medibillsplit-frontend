import type { FC } from "react"
import { useNavigate } from "react-router-dom"

interface LogoProps {
  className?: string
}



export const Logo: FC<LogoProps> = ({ className = "h-8 w-8" }) => {
  // Call the hook at the top level of the component
  const navigate = useNavigate();

  // Define the click handler that uses the already initialized navigate function
  const landingPage = () => {
    navigate("/");
  }
  
  return (
    <div onClick={landingPage} className={`bg-blue-500 cursor-pointer rounded-full flex items-center justify-center ${className}`}>
      <span className="text-white font-bold text-xl">M</span>
    </div>
  )
}

