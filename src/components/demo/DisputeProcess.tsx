"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertCircle } from "lucide-react"

interface DisputeMessage {
  member: string
  message: string
}

interface DisputeProcessProps {
  messages: DisputeMessage[]
}

export function DisputeProcess({ messages }: DisputeProcessProps) {
  const [visibleMessages, setVisibleMessages] = useState<DisputeMessage[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev.length < messages.length) {
          return [...prev, messages[prev.length]]
        }
        return prev
      })
    }, 2000)

    return () => clearInterval(timer)
  }, [messages])

  return (
    <Card className="bg-gray-800 border-green-500">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-400">
          <AlertCircle className="w-5 h-5" />
          Dispute Process
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <AnimatePresence>
            {visibleMessages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, x: message.member === "Sarah" ? -20 : 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                className={`flex items-start gap-3 ${message.member === "Sarah" ? "justify-start" : "justify-end"}`}
              >
                {message.member === "Sarah" && (
                  <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${message.member}`} />
                    <AvatarFallback>{message.member[0]}</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`bg-gray-700 rounded-lg p-3 max-w-[70%] ${message.member === "Sarah" ? "rounded-tl-none" : "rounded-tr-none"}`}
                >
                  <p className="font-medium text-blue-300 mb-1">{message.member}</p>
                  <p className="text-sm text-green-400">{message.message}</p>
                </div>
                {message.member === "John" && (
                  <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${message.member}`} />
                    <AvatarFallback>{message.member[0]}</AvatarFallback>
                  </Avatar>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  )
}

