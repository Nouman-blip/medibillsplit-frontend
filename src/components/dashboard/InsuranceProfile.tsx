"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const insuranceData = {
  policyHolder: "John Doe",
  policyNumber: "POL-12345678",
  provider: "HealthGuard Insurance",
  planType: "Family PPO",
  coverageStart: "2023-01-01",
  coverageEnd: "2023-12-31",
  deductible: 1000,
  outOfPocketMax: 5000,
  coverageDetails: [
    { category: "Primary Care", coverage: "100%", copay: "$0" },
    { category: "Specialist Visits", coverage: "80%", copay: "$30" },
    { category: "Emergency Room", coverage: "90%", copay: "$150" },
    { category: "Prescription Drugs", coverage: "70%", copay: "$10-$50" },
    { category: "Mental Health", coverage: "80%", copay: "$25" },
  ],
};

export function InsuranceProfile({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-[#00072D] dark:bg-[#00072D] rounded-lg p-6 w-full max-w-3xl shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Insurance Profile</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6 text-white" />
          </Button>
        </div>
        <div className="space-y-6">
          <Card className="bg-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Policy Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-300">Policy Holder</p>
                  <p className="font-medium text-white">{insuranceData.policyHolder}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Policy Number</p>
                  <p className="font-medium text-white">{insuranceData.policyNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Provider</p>
                  <p className="font-medium text-white">{insuranceData.provider}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Plan Type</p>
                  <p className="font-medium text-white">{insuranceData.planType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Coverage Start</p>
                  <p className="font-medium text-white">{insuranceData.coverageStart}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Coverage End</p>
                  <p className="font-medium text-white">{insuranceData.coverageEnd}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Coverage Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-300">Deductible</p>
                    <p className="font-medium text-white">${insuranceData.deductible}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Out of Pocket Max</p>
                    <p className="font-medium text-white">${insuranceData.outOfPocketMax}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {insuranceData.coverageDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-gray-600 p-2 rounded"
                    >
                      <span className="font-medium text-white">{detail.category}</span>
                      <div>
                        <Badge variant="secondary" className="mr-2">
                          {detail.coverage}
                        </Badge>
                        <Badge className="bg-gray-500 text-white">{detail.copay}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
}
