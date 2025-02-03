"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const activities = [
  {
    id: 1,
    user: "John Doe",
    avatar: "/avatars/john.png",
    action: "added a new bill",
    amount: "$150",
    time: "2 hours ago",
  },
  {
    id: 2,
    user: "Jane Doe",
    avatar: "/avatars/jane.png",
    action: "disputed a charge",
    amount: "$75",
    time: "4 hours ago",
  },
  {
    id: 3,
    user: "Mike Doe",
    avatar: "/avatars/mike.png",
    action: "paid a bill",
    amount: "$200",
    time: "Yesterday",
  },
  {
    id: 4,
    user: "Sarah Doe",
    avatar: "/avatars/sarah.png",
    action: "updated insurance info",
    amount: null,
    time: "2 days ago",
  },
];

export function RecentActivity() {
  return (
    <Card className="bg-[#00072D] shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="flex items-center space-x-4 p-3 bg-gray-600 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Avatar>
                <AvatarImage src={activity.avatar} alt={activity.user} />
                <AvatarFallback>{activity.user[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold text-white">
                  {activity.user} <span className="font-normal">{activity.action}</span>
                </p>
                <p className="text-sm text-gray-300">{activity.time}</p>
              </div>
              {activity.amount && (
                <span className="font-bold text-green-400">{activity.amount}</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}
