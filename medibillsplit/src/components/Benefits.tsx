import { motion } from "framer-motion"
import { CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface benefitsItems{
    title: string 
    description: string
}

const BenefitItem = ({ title, description }:benefitsItems) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-start space-x-3 mb-6"
  >
    <CheckCircle className="w-6 h-6 text-medibill-blue flex-shrink-0 mt-1" />
    <div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-medibill-muted">{description}</p>
    </div>
  </motion.div>
)

const PainPoint = ({ title, description }:benefitsItems) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-start space-x-3 mb-6"
  >
    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
    <div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-medibill-muted">{description}</p>
    </div>
  </motion.div>
)

const Benefits = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Families Choose MediBillSplit
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Pain Points We Solve</h3>
            <PainPoint
              title="Overwhelming Medical Bills"
              description="No more drowning in a sea of confusing paperwork and bills."
            />
            <PainPoint
              title="Missed Payments"
              description="Say goodbye to late fees and damaged credit scores due to overlooked bills."
            />
            <PainPoint
              title="Family Disputes Over Costs"
              description="End arguments about who owes what for shared medical expenses."
            />
            <PainPoint
              title="Insurance Claim Confusion"
              description="Stop struggling to understand what's covered and what's not."
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Benefits You'll Experience</h3>
            <BenefitItem
              title="Stress-Free Bill Management"
              description="Easily upload, organize, and track all your medical bills in one place."
            />
            <BenefitItem
              title="Fair Cost Splitting"
              description="Automatically divide expenses among family members based on custom rules."
            />
            <BenefitItem
              title="Real-Time Payment Tracking"
              description="Always know what's paid, what's pending, and what's coming up."
            />
            <BenefitItem
              title="Insurance Claim Monitoring"
              description="Track the status of your claims and understand your coverage better."
            />
          </div>
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl font-bold mb-4">Ready to take control of your medical bills?</p>
          <Button
            size="lg"
            className="bg-medibill-blue hover:bg-medibill-blue/90 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your 30-Day Free Trial
          </Button>
          <p className="mt-4 text-medibill-muted">No credit card required. Cancel anytime.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits

