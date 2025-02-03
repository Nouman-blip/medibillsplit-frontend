
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export interface DisputesOverviewProps {
  onOpenChat: () => void;
}

const initialDisputes = [
  {
    id: 1,
    user: "Jane Doe",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Jane",
    description: "Hospital Bill Split",
    amount: "$300",
    status: "Open",
  },
  {
    id: 2,
    user: "Mike Doe",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Mike",
    description: "Prescription Coverage",
    amount: "$75",
    status: "Resolved",
  },
  {
    id: 3,
    user: "Sarah Doe",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Sarah",
    description: "Specialist Visit",
    amount: "$150",
    status: "Open",
  },
];

export function DisputesOverview({ onOpenChat }: DisputesOverviewProps) {
  const [disputes, setDisputes] = useState(initialDisputes);
  const [newDispute, setNewDispute] = useState({ description: "", amount: "" });

  const handleAddDispute = () => {
    if (newDispute.description && newDispute.amount) {
      setDisputes([
        ...disputes,
        {
          id: disputes.length + 1,
          user: "John Doe",
          avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=John",
          description: newDispute.description,
          amount: `$${newDispute.amount}`,
          status: "Open",
        },
      ]);
      setNewDispute({ description: "", amount: "" });
    }
  };

  return (
    <div className="space-y-4">
      {/* Header with "Open New Dispute" Dialog */}
      <div className="flex flex-row items-center justify-between pb-2">
        <h2 className="text-2xl font-bold">Disputes Overview</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dispute</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-[#05081C] rounded-md">
            <DialogHeader>
              <DialogTitle className="text-white">Open New Dispute</DialogTitle>
              <DialogDescription className="text-gray-300">
                Provide details about the billing issue you'd like to dispute.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right text-gray-300">
                  Description
                </Label>
                <Input
                  id="description"
                  value={newDispute.description}
                  onChange={(e) =>
                    setNewDispute({
                      ...newDispute,
                      description: e.target.value,
                    })
                  }
                  className="col-span-3 bg-gray-700 text-white"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-right text-gray-300">
                  Amount
                </Label>
                <Input
                  id="amount"
                  value={newDispute.amount}
                  onChange={(e) =>
                    setNewDispute({
                      ...newDispute,
                      amount: e.target.value,
                    })
                  }
                  className="col-span-3 bg-gray-700 text-white"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddDispute}>
                Submit Dispute
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* List of Disputes */}
      <div className="space-y-4">
        {disputes.map((dispute, index) => (
          <motion.div
            key={dispute.id}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
              dispute.status === "Open"
              ? "bg-gray-50 dark:bg-gray-800"
              : "bg-[#05081C] hover:bg-gray-700"
            }`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => {
              if (dispute.status === "Open") {
                onOpenChat();
              }
            }}
          >
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={dispute.avatar} alt={dispute.user} />
                <AvatarFallback>{dispute.user[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">{dispute.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{dispute.user}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-800 dark:text-white">{dispute.amount}</p>
              <Badge variant={dispute.status === "Open" ? "destructive" : "secondary"} className="bg-black">
                {dispute.status}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
