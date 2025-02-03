"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

// Use the FamilyMember type defined in Dashboard or define here if needed.
export interface FamilyMember {
  id: number;
  name: string;
  role: string;
  insurance: string;
  avatar: string;
}

export interface FamilyData {
  name: string;
  members: FamilyMember[];
}

export interface FamilyOverviewProps {
  familyData: FamilyData;
}

export function FamilyOverview({ familyData }: FamilyOverviewProps) {
  const [selectedMember, setSelectedMember] =
    useState<FamilyMember | null>(null);

  return (
    <TooltipProvider>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold text-blue-400">
            {familyData.name} Overview
          </CardTitle>
          <AvatarStack familyMembers={familyData.members} />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {familyData.members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-700 p-4 rounded-lg shadow-md flex flex-col items-center space-y-2"
              >
                <Avatar className="w-16 h-16 border-2 border-blue-400">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-white text-lg">
                  {member.name}
                </h3>
                <Badge variant="secondary" className="bg-gray-600 text-blue-400">
                  {member.role}
                </Badge>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedMember(member)}
                    >
                      View Details
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to view member details</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <AnimatePresence>
          {selectedMember && (
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
                className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full"
              >
                <h2 className="text-2xl font-bold text-blue-400 mb-4">
                  {selectedMember.name}
                </h2>
                <p className="text-white mb-2">
                  Role: {selectedMember.role}
                </p>
                <p className="text-white mb-4">
                  Insurance: {selectedMember.insurance}
                </p>
                <Button onClick={() => setSelectedMember(null)}>
                  Close
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </TooltipProvider>
  );
}

function AvatarStack({ familyMembers }: { familyMembers: FamilyMember[] }) {
  return (
    <div className="flex items-center -space-x-3">
      {familyMembers.slice(0, 3).map((member) => (
        <Avatar key={member.id} className="w-8 h-8 border-2 border-gray-800">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback>{member.name[0]}</AvatarFallback>
        </Avatar>
      ))}
      {familyMembers.length > 3 && (
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-medium text-blue-400">
          +{familyMembers.length - 3}
        </div>
      )}
    </div>
  );
}
