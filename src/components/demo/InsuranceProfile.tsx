"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Shield } from "lucide-react"

interface InsuranceProfile {
  name: string
  type: string
  details: string
}

interface InsuranceProfilesProps {
  profiles: InsuranceProfile[]
}

export function InsuranceProfiles({ profiles }: InsuranceProfilesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Insurance Profiles
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.name}`} />
                  <AvatarFallback>{profile.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{profile.name}</p>
                  <Badge variant="outline" className="mt-1">
                    {profile.type}
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{profile.details}</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

