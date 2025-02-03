"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users } from "lucide-react"

interface FamilyMember {
  name: string
  role: string
  emoji: string
}

interface FamilyAccountProps {
  familyData: {
    familyName: string
    members: FamilyMember[]
  }
}

export function FamilyAccount({ familyData }: FamilyAccountProps) {
  return (
    <Card className="bg-gray-800 border-green-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-400">
          <Users className="w-5 h-5" />
          {familyData.familyName} Family Account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        >
          {familyData.members.map((member) => (
            <motion.div
              key={member.name}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="flex items-center gap-3 bg-gray-700 p-3 rounded-lg"
            >
              <Avatar>
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`} />
                <AvatarFallback>{member.emoji}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-blue-300">{member.name}</p>
                <p className="text-sm text-green-400">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  )
}

