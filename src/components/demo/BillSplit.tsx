import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Split } from "lucide-react"

interface BillSplitItem {
  member: string
  amount: number
  percentage?: number
}

interface BillSplitProps {
  items: BillSplitItem[]
  isInitial: boolean
}

export function BillSplit({ items, isInitial }: BillSplitProps) {
  return (
    <Card className="bg-gray-800 border-green-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-400">
          <Split className="w-5 h-5" />
          {isInitial ? "Initial Bill Split" : "Final Bill Split"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.member}
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
                <p className="font-medium text-blue-300">{item.member}</p>
              </div>
              <div className="text-right">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 120 }}
                >
                  <Badge variant="default" className="bg-green-600 text-white mb-1">
                    ${item.amount.toFixed(2)}
                  </Badge>
                </motion.div>
                {!isInitial && item.percentage && (
                  <motion.p
                    className="text-sm text-green-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.2 }}
                  >
                    {item.percentage}% of total
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  )
}

