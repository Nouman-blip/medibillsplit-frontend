import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { plans } from "@/data/plans"
import Checkout from "./Checkout"

interface PricingCardProps {
  plan: any
  yearly: boolean
  onSelectPlan: (priceId: string) => void
}

const PricingCard = ({ plan, yearly, onSelectPlan }: PricingCardProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`relative bg-medibill-card p-6 rounded-xl border ${
      plan.popular ? "border-medibill-blue" : "border-white/10"
    }`}
  >
    {plan.popular && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-medibill-blue text-white px-3 py-1 rounded-full text-sm">
        Most Popular
      </div>
    )}
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
      <p className="text-medibill-muted text-sm mb-4">{plan.description}</p>
      <div className="flex items-baseline mb-4">
        <span className="text-4xl font-bold">
          ${yearly ? plan.price.yearly : plan.price.monthly}
        </span>
        <span className="text-medibill-muted ml-2">
          /{yearly ? "year" : "month"}
        </span>
      </div>
    </div>
    <ul className="space-y-3 mb-8">
      {plan.features.map((feature: any, index: number) => (
        <li key={index} className="flex items-center text-sm">
          <Check className="w-4 h-4 text-medibill-blue mr-2" />
          <span className="text-medibill-muted">{feature}</span>
        </li>
      ))}
    </ul>
    <Button
      // When clicked, pass the dynamic priceId (depending on yearly/monthly) to the parent handler.
      onClick={() =>
        onSelectPlan(yearly ? plan.yearlyPriceId : plan.monthlyPriceId)
      }
      className={`w-full ${plan.popular ? "bg-medibill-blue hover:bg-medibill-blue/90" : ""}`}
      variant={plan.popular ? "default" : "outline"}
    >
      Get Started
    </Button>
  </motion.div>
)

const Pricing = () => {
  const [yearly, setYearly] = useState(false)
  // When a plan is selected, store its priceId
  const [selectedPriceId, setSelectedPriceId] = useState<string | null>(null)

  // If a plan is selected, render the full-page Checkout component.
  if (selectedPriceId) {
    return <Checkout priceId={selectedPriceId} />
  }

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-medibill-blue/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-medibill-muted mb-8">
            Choose the perfect plan for your family's needs
          </p>

          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!yearly ? "text-white" : "text-medibill-muted"}`}>
              Monthly
            </span>
            <Switch checked={yearly} onCheckedChange={setYearly} />
            <span className={`text-sm ${yearly ? "text-white" : "text-medibill-muted"}`}>
              Yearly (Save 17%)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan: any) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              yearly={yearly}
              onSelectPlan={setSelectedPriceId}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
