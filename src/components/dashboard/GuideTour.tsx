"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const tourSteps = [
  {
    title: "Welcome to Family MediBill Hub",
    content: "This tour will guide you through the main features of your dashboard.",
  },
  {
    title: "Quick Actions",
    content: "Use these cards to quickly access common tasks like adding family members or viewing bills.",
  },
  {
    title: "Family Overview",
    content: "See all your family members at a glance and access their individual profiles.",
  },
  {
    title: "Bill Summary",
    content: "View your latest bill, including coverage details and line items.",
  },
  {
    title: "Disputes Overview",
    content: "Manage and track any ongoing disputes with your medical bills.",
  },
]

interface GuidedTourProps {
  onClose: () => void
}

export function GuidedTour({ onClose }: GuidedTourProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onClose()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-gray-800 rounded-lg shadow-xl max-w-md w-full"
        >
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-400">{tourSteps[currentStep].title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white">{tourSteps[currentStep].content}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
                Previous
              </Button>
              <Button onClick={handleNext}>{currentStep === tourSteps.length - 1 ? "Finish" : "Next"}</Button>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

