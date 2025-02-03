"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const notifications = [
  { id: 1, message: "New bill added by John Doe", time: "2 minutes ago" },
  { id: 2, message: "Dispute resolved for prescription coverage", time: "1 hour ago" },
  { id: 3, message: "Insurance information updated", time: "Yesterday" },
  { id: 4, message: "Payment reminder: Hospital bill due in 3 days", time: "2 days ago" },
];

export function Notifications({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-[#00072D] dark:bg-[#00072D] rounded-lg p-6 w-full max-w-md shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Notifications</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6 text-white" />
          </Button>
        </div>
        <ScrollArea className="h-[300px]">
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="bg-gray-600 p-3 rounded-lg">
                <p className="text-white">{notification.message}</p>
                <p className="text-sm text-gray-300 mt-1">{notification.time}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </motion.div>
    </motion.div>
  );
}
