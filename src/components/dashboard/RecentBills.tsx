"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const recentBills = [
  { id: 1, description: "Hospital Visit", amount: 1500, date: "2023-05-15" },
  { id: 2, description: "Prescription", amount: 75, date: "2023-05-20" },
  { id: 3, description: "Specialist Consultation", amount: 250, date: "2023-05-25" },
];

export function RecentBills() {
  return (
    <Card className="bg-[#00072D] shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Recent Bills</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {recentBills.map((bill, index) => (
            <motion.div
              key={bill.id}
              className="flex justify-between items-center p-3 bg-gray-600 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div>
                <p className="font-semibold text-white">{bill.description}</p>
                <p className="text-sm text-gray-300">{bill.date}</p>
              </div>
              <p className="font-bold text-green-400">${bill.amount}</p>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}
