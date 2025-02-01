import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Upload, SplitSquareVertical, Bell, ShieldCheck, CircleDollarSign,
    CheckCircle2, LucideIcon
} from "lucide-react"

interface AnimatedProps {
    icon: LucideIcon
    label: string
    description: string
    isActive: Boolean
    onClick:React.MouseEventHandler<HTMLDivElement>
  }

const ProcessNode = ({ icon: Icon, label, description, isActive, onClick }:AnimatedProps) => (
  <motion.div
    className={`bg-medibill-card border ${isActive ? "border-medibill-blue" : "border-white/10"} p-6 rounded-xl cursor-pointer transition-colors duration-300`}
    whileHover={{ scale: 1.05 }}
    onClick={onClick}
  >
    <div className="flex items-center space-x-4 mb-2">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${isActive ? "bg-medibill-blue" : "bg-medibill-card"}`}
      >
        <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-medibill-blue"}`} />
      </div>
      <h3 className="text-lg font-semibold">{label}</h3>
    </div>
    <AnimatePresence>
      {isActive && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="text-medibill-muted text-sm mt-2"
        >
          {description}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
)

const AnimatedFlow = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    { icon: Upload, label: "Upload Bills", description: "Securely upload your medical bills to our platform." },
    {
      icon: ShieldCheck,
      label: "Insurance Check",
      description: "We automatically verify coverage with your insurance provider.",
    },
    {
      icon: SplitSquareVertical,
      label: "Split Bills",
      description: "Costs are intelligently divided among family members.",
    },
    {
      icon: CircleDollarSign,
      label: "Process Payments",
      description: "Handle payments directly through our secure system.",
    },
    { icon: Bell, label: "Send Notifications", description: "Get timely alerts about bills, payments, and updates." },
    {
      icon: CheckCircle2,
      label: "Complete Process",
      description: "Your medical bills are fully managed and organized.",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Streamlined Process</h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-medibill-blue/20 -translate-y-1/2" />
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-medibill-blue -translate-y-1/2"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {steps.map((step, index) => (
              <ProcessNode
                key={index}
                icon={step.icon}
                label={step.label}
                description={step.description}
                isActive={index === activeStep}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center space-x-4">
          <button
            className="px-4 py-2 bg-medibill-blue text-white rounded-md"
            onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : prev))}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-medibill-blue text-white rounded-md"
            onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev))}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

export default AnimatedFlow

