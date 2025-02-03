"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

const billData = {
  id: "BILL-001",
  date: "2023-05-15",
  provider: "City Hospital",
  totalAmount: 2500,
  coveredAmount: 2000,
  lineItems: [
    {
      id: 1,
      description: "Emergency Room Visit",
      amount: 1500,
      covered: 1200,
      coveragePercentage: 80,
    },
    {
      id: 2,
      description: "X-Ray",
      amount: 500,
      covered: 400,
      coveragePercentage: 80,
    },
    {
      id: 3,
      description: "Lab Tests",
      amount: 300,
      covered: 240,
      coveragePercentage: 80,
    },
    {
      id: 4,
      description: "Prescription Medication",
      amount: 200,
      covered: 160,
      coveragePercentage: 80,
    },
  ],
}

export function BillDetails({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-[#05081C] dark:bg-gray-800 rounded-md p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Bill Details</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Bill ID</p>
              <p className="font-medium">{billData.id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
              <p className="font-medium">{billData.date}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Provider</p>
              <p className="font-medium">{billData.provider}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Amount</p>
              <p className="font-medium">${billData.totalAmount.toFixed(2)}</p>
            </div>
          </div>
          {/* Reduced scroll area height */}
          <ScrollArea className="h-[280px] rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Covered</TableHead>
                  <TableHead className="text-right">Your Responsibility</TableHead>
                  <TableHead>Coverage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {billData.lineItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.description}</TableCell>
                    <TableCell className="text-right">${item.amount.toFixed(2)}</TableCell>
                    <TableCell className="text-right">${item.covered.toFixed(2)}</TableCell>
                    <TableCell className="text-right">
                      ${(item.amount - item.covered).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Progress value={item.coveragePercentage} className="mr-2" />
                        <span className="text-sm">{item.coveragePercentage}%</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Covered</p>
              <p className="font-medium text-green-600">${billData.coveredAmount.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Your Responsibility</p>
              <p className="font-medium text-red-600">
                ${(billData.totalAmount - billData.coveredAmount).toFixed(2)}
              </p>
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button>Pay Now</Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
