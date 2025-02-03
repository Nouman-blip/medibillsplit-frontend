"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

const coverageData = {
  labels: ["Covered", "Out of Pocket"],
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ["#4CAF50", "#FFA000"],
      hoverBackgroundColor: ["#45a049", "#FF6F00"],
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
}

const coverageDetails = [
  { category: "Primary Care", covered: "100%", outOfPocket: "$0" },
  { category: "Specialist Visits", covered: "80%", outOfPocket: "20%" },
  { category: "Emergency Room", covered: "90%", outOfPocket: "10%" },
  { category: "Prescription Drugs", covered: "70%", outOfPocket: "30%" },
  { category: "Mental Health", covered: "80%", outOfPocket: "20%" },
]

export function CoverageReport({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-3xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Coverage Report</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Overall Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <Pie data={coverageData} options={options} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Coverage Details</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64">
                <div className="space-y-4">
                  {coverageDetails.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium">{item.category}</span>
                      <div className="text-right">
                        <span className="text-green-600">{item.covered}</span>
                        <span className="text-gray-400 mx-2">/</span>
                        <span className="text-red-600">{item.outOfPocket}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </motion.div>
    </motion.div>
  )
}

