import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const FAQItem = ({ question, answer }:any) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/10 py-3">
      <button className="flex justify-between items-center w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-base font-medium">{question}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 text-sm text-medibill-muted"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQ = () => {
  const faqs = [
    {
      question: "How does MediBillSplit ensure the security of my data?",
      answer:
        "We use industry-standard encryption and comply with HIPAA regulations to keep your data secure and private. Our platform employs bank-level security measures to protect your sensitive information.",
    },
    {
      question: "Can I customize how bills are split among family members?",
      answer:
        "Yes, you can set custom rules for bill splitting based on various factors such as income, insurance coverage, or equal shares. Our flexible system adapts to your family's unique needs.",
    },
    {
      question: "How does MediBillSplit handle insurance claims?",
      answer:
        "We track your insurance claims in real-time, provide updates on their status, and adjust your bills accordingly once claims are processed. This ensures you always have an accurate picture of your out-of-pocket expenses.",
    },
    {
      question: "Is there a limit to how many family members I can add?",
      answer:
        "Our basic plan allows up to 5 family members. For larger families, we offer premium plans with unlimited member additions to accommodate families of all sizes.",
    },
    {
      question: "What if I have trouble uploading a bill?",
      answer:
        "Our system supports various file formats, but if you encounter any issues, our 24/7 customer support team is ready to assist you. We also offer manual bill entry options for rare cases where automatic uploading doesn't work.",
    },
    {
      question: "Can I use MediBillSplit with multiple types of insurance?",
      answer:
        "MediBillSplit is designed to work with multiple insurance providers, including private insurance, Medicare, and Medicaid. You can easily manage and track claims across different policies.",
    },
    {
      question: "What happens after I sign up for the free trial?",
      answer:
        "After signing up, you'll get immediate access to all features of our platform for 30 days. We'll send you a welcome email with getting started guides. There's no obligation to continue after the trial, and we'll remind you before it ends.",
    },
  ]

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

