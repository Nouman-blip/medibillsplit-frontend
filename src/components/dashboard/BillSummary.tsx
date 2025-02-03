"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

export interface BillItem {
  id: number;
  procedureCode: string;
  description: string;
  amount: number;
  member: string;
}

export interface BillData {
  provider: string;
  totalAmount: number;
  lineItems: BillItem[];
}

export interface BillSummaryProps {
  billData: BillData;
}

export function BillSummary({ billData }: BillSummaryProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const totalCovered = billData.totalAmount * 0.8; // 80% covered by insurance
  const totalResponsibility = billData.totalAmount - totalCovered;

  return (
    <TooltipProvider>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-400">
            Bill Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white">Provider:</span>
              <span className="text-blue-400">{billData.provider}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white">Total Amount:</span>
              <span className="text-green-400 text-xl font-bold">
                ${billData.totalAmount.toFixed(2)}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white">Insurance Covered:</span>
                <span className="text-green-400">
                  ${totalCovered.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">Your Responsibility:</span>
                <span className="text-yellow-400">
                  ${totalResponsibility.toFixed(2)}
                </span>
              </div>
              <Progress
                value={(totalCovered / billData.totalAmount) * 100}
                className="h-2 bg-gray-700"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">Line Items</h3>
              {billData.lineItems.map((item) => (
                <Tooltip key={item.id}>
                  <TooltipTrigger asChild>
                    <motion.div
                      className="flex justify-between items-center p-2 bg-gray-700 rounded-lg cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      onHoverStart={() => setHoveredItem(item.id)}
                      onHoverEnd={() => setHoveredItem(null)}
                    >
                      <span className="text-white">
                        {item.description}
                      </span>
                      <Badge variant="secondary">
                        ${item.amount.toFixed(2)}
                      </Badge>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Procedure Code: {item.procedureCode}</p>
                    <p>Member: {item.member}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}
