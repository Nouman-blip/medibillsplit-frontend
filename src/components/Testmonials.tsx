import { motion } from "framer-motion"
import { Button } from "@/components/ui/button" // Import the Button component

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Healthcare Administrator",
    content:
      "MediBillSplit has revolutionized how we manage patient billing. It's user-friendly and incredibly efficient. We've seen a 40% reduction in billing-related inquiries since implementing it.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Michael Chen",
    role: "Family of Four",
    content:
      "As a parent, keeping track of medical expenses was a nightmare. MediBillSplit made it simple and stress-free. We've saved about 5 hours a month on bill management!",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Family Physician",
    content:
      "I recommend MediBillSplit to all my patients. It's a game-changer for managing complex medical bills. My patients report feeling much more in control of their healthcare costs.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Users Say
        </motion.h2>
        <motion.p
          className="text-center text-medibill-muted mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Join thousands of satisfied users who have taken control of their healthcare expenses
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-medibill-card/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-medibill-muted mb-4">"{testimonial.content}"</p>
              
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-medibill-muted">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl font-bold mb-4">Join 10,000+ families who trust MediBillSplit</p>
          <Button
            size="lg"
            className="bg-medibill-blue hover:bg-medibill-blue/90 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your Free Trial Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

