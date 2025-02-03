"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { FileText, DollarSign } from "lucide-react"

interface CoverageItem {
  lineItem: string
  member: string
  insuranceCovered: string
  personalResponsibility: number
}

interface InsuranceCoverageBreakdownProps {
  items: CoverageItem[]
}

export function InsuranceCoverageBreakdown({ items }: InsuranceCoverageBreakdownProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Insurance Coverage Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={item.lineItem}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.member}`} />
                  <AvatarFallback>{item.member[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{item.lineItem}</p>
                  <p className="text-sm text-muted-foreground">{item.member}</p>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="outline" className="mb-1">
                  {item.insuranceCovered}
                </Badge>
                <p className="text-sm font-medium">
                  <DollarSign className="w-4 h-4 inline" />
                  {item.personalResponsibility.toFixed(2)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

