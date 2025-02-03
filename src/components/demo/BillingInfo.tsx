"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FileText, DollarSign } from "lucide-react"

interface LineItem {
  description: string
  amount: number
  member: string
}

interface BillingInformationProps {
  billingData: {
    total: number
    lineItems: LineItem[]
  }
}

export function BillingInformation({ billingData }: BillingInformationProps) {
  return (
    <Card className="bg-gray-800 border-green-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-400">
          <FileText className="w-5 h-5" />
          Billing Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          className="text-center p-6 bg-gray-700 rounded-lg mb-6"
        >
          <p className="text-sm text-green-400 mb-2">Total Bill Amount</p>
          <motion.p
            className="text-4xl font-bold text-blue-400"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          >
            ${billingData.total.toFixed(2)}
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
        >
          {billingData.lineItems.map((item, index) => (
            <motion.div
              key={item.description}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-700"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.member}`} />
                  <AvatarFallback>{item.member[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-blue-300">{item.description}</p>
                  <p className="text-sm text-green-400">For: {item.member}</p>
                </div>
              </div>
              <motion.p
                className="text-lg font-semibold text-green-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 120 }}
              >
                <DollarSign className="w-4 h-4 inline-block" />
                {item.amount.toFixed(2)}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  )
}

