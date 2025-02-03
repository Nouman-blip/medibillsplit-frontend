"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

interface FinalResolutionProps {
  resolution: string
  timestamp: string
}

export function FinalResolution({ resolution, timestamp }: FinalResolutionProps) {
  return (
    <Card className="bg-gray-800 border-green-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-400">
          <CheckCircle className="w-5 h-5" />
          Final Resolution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          className="p-4 bg-gray-700 rounded-lg"
        >
          <motion.p
            className="text-blue-300 mb-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {resolution}
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
          >
            <Badge variant="outline" className="bg-green-600 text-white">
              {timestamp}
            </Badge>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  )
}

