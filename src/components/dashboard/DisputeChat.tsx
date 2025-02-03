"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// This is a mock-up of real-time functionality.
const mockMessages = [
  {
    id: 1,
    user: "John Doe",
    message: "I have a question about the recent hospital bill.",
    timestamp: "2023-05-20T10:00:00",
  },
  {
    id: 2,
    user: "Support Agent",
    message: "Hello John, I'd be happy to help. What specific question do you have?",
    timestamp: "2023-05-20T10:05:00",
  },
  {
    id: 3,
    user: "John Doe",
    message: "I noticed a charge for $500 that I don't recognize. Can you explain this?",
    timestamp: "2023-05-20T10:10:00",
  },
  {
    id: 4,
    user: "Support Agent",
    message: "Certainly, I'll look into that for you. Can you please provide the date of service for this charge?",
    timestamp: "2023-05-20T10:15:00",
  },
];

export function DisputeChat({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        user: "John Doe",
        message: newMessage,
        timestamp: new Date().toISOString(),
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-[#05081C] dark:bg-[#00072D] rounded-lg p-6 w-full max-w-2xl h-[80vh] flex flex-col shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Dispute Chat</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6 text-white" />
          </Button>
        </div>
        <ScrollArea className="flex-grow mb-4">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.user === "John Doe" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[70%] ${
                    msg.user === "John Doe" ? "flex-row-reverse space-x-reverse" : ""
                  }`}
                >
                  <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${msg.user}`} />
                    <AvatarFallback>{msg.user[0]}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`bg-gray-100 dark:bg-gray-700 p-3 rounded-lg ${
                      msg.user === "John Doe" ? "rounded-tr-none" : "rounded-tl-none"
                    }`}
                  >
                    <p className="font-semibold text-sm text-gray-800 dark:text-white">{msg.user}</p>
                    <p className="text-gray-600 dark:text-gray-300">{msg.message}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="bg-gray-700 text-white border-gray-600 placeholder-gray-400"
          />
          <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
