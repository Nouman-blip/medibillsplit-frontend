
import { motion } from "framer-motion"
import { FileText, Users, Shield, CreditCard, Bell, BarChartIcon as ChartBarIcon } from "lucide-react"

const FeatureCard = ({ icon: Icon, label, description }:any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
    className="bg-medibill-card/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl"
  >
    <div className="flex items-center space-x-4 mb-3">
      <div className="w-10 h-10 rounded-lg bg-medibill-blue/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-medibill-blue" />
      </div>
      <h3 className="text-lg font-medium">{label}</h3>
    </div>
    <p className="text-medibill-muted text-sm">{description}</p>
  </motion.div>
)

const FloatingFeatures = () => {
  const features = [
    {
      icon: FileText,
      label: "Bill Upload",
      description: "Securely upload and organize all your medical bills in one place",
    },
    {
      icon: Shield,
      label: "Insurance Verification",
      description: "Automatic verification of insurance coverage and benefits",
    },
    {
      icon: Users,
      label: "Family Sharing",
      description: "Easily manage and split bills among family members",
    },
    {
      icon: CreditCard,
      label: "Smart Payments",
      description: "Process payments and track expenses automatically",
    },
    {
      icon: Bell,
      label: "Notifications",
      description: "Stay updated with timely alerts and reminders",
    },
    {
      icon: ChartBarIcon,
      label: "Analytics",
      description: "Clear insights into your medical spending patterns",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <p className="text-medibill-muted text-lg">
              Streamline your medical bill management with our integrated features
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} label={feature.label} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FloatingFeatures

