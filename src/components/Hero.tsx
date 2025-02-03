import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText, Users, CreditCard, Bell, ChevronDown, Shield } from "lucide-react"
import { Link } from "react-router-dom"

const ProcessCard = ({ icon: Icon, title, description, className }:any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className={`bg-medibill-card/90 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg ${className}`}
  >
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-medibill-blue/20 to-medibill-purple/20 flex items-center justify-center">
        <Icon className="w-5 h-5 text-medibill-blue" />
      </div>
      <div>
        <h3 className="font-semibold text-sm text-white">{title}</h3>
        <p className="text-xs text-medibill-muted">{description}</p>
      </div>
    </div>
  </motion.div>
)

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-medibill-blue/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {["HIPAA Compliant", "Trusted by 10,000+ Families", "24/7 Support", "Bank-Level Security"].map((badge) => (
              <div
                key={badge}
                className="px-4 py-1 bg-medibill-card/50 backdrop-blur-sm rounded-full text-xs text-medibill-muted border border-white/10 flex items-center"
              >
                <Shield className="w-3 h-3 mr-1" />
                {badge}
              </div>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Finally, Take Control of Your Family's
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medibill-blue to-medibill-purple">
              Medical Bills with Ease
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-medibill-muted mb-8 max-w-2xl"
          >
            Say goodbye to stress and confusion. MediBillSplit helps you manage, split, and track all your family's
            medical expenses in one place. Experience peace of mind and save time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="bg-medibill-blue hover:bg-medibill-blue/90 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your 30-Day Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/10">
                  <Link to='/DemoPage'>
                     Watch product Demo
                  </Link>
              </Button>
            </div>
            <p className="text-sm text-medibill-muted">No credit card required. Cancel anytime.</p>
            <ChevronDown className="w-6 h-6 text-medibill-blue animate-bounce" />
          </motion.div>
        </div>

        <div className="relative mt-20">
          <div className="absolute inset-0 bg-gradient-conic from-medibill-blue/20 via-medibill-purple/20 to-medibill-blue/20 opacity-30 blur-3xl" />
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <ProcessCard
              icon={FileText}
              title="Upload Bills"
              description="Securely upload and organize medical bills"
              className="lg:transform lg:-rotate-6"
            />
            <ProcessCard
              icon={Users}
              title="Split Costs"
              description="Automatically divide expenses among family"
              className="lg:transform lg:-rotate-3"
            />
            <ProcessCard
              icon={CreditCard}
              title="Track Payments"
              description="Monitor payments and insurance claims"
              className="lg:transform lg:rotate-3"
            />
            <ProcessCard
              icon={Bell}
              title="Stay Updated"
              description="Get notifications for bills and deadlines"
              className="lg:transform lg:rotate-6"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-bold mb-6">Transform Your Medical Bill Management</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="bg-medibill-card/50 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-2">Before MediBillSplit</h3>
              <ul className="text-left text-medibill-muted">
                <li>• Overwhelming pile of bills</li>
                <li>• Confusion over payments</li>
                <li>• Missed deadlines</li>
                <li>• Family disputes over costs</li>
              </ul>
            </div>
            <div className="bg-medibill-card/50 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-2">After MediBillSplit</h3>
              <ul className="text-left text-medibill-muted">
                <li>• Organized digital dashboard</li>
                <li>• Clear payment tracking</li>
                <li>• Timely reminders</li>
                <li>• Fair and automatic cost splitting</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

