"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserPlus,
  CreditCard,
  MessageSquare,
  PieChart,
  Bell,
  Home,
  Users,
  Shield,
  Settings,
  BarChart,
  Wallet,
  AlertCircle,
} from "lucide-react";
import { FamilyOverview } from "../components/dashboard/FamilyOverview";
import { BillSummary } from "../components/dashboard/BillSummary";
import { DisputesOverview } from "../components/dashboard/DisputeOverview";
import { AddFamilyMember } from "../components/dashboard/FamilyMember";
import { BillDetails } from "../components/dashboard/BillDetails";
import { DisputeChat } from "../components/dashboard/DisputeChat";
import { GuidedTour } from "../components/dashboard/GuideTour";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

/**
 * Data type definitions.
 */

export interface FamilyMember {
  id: number;
  name: string;
  role: string;
  insurance: string;
  avatar: string;
}

interface FamilyData {
  name: string;
  members: FamilyMember[];
}

interface BillData {
  provider: string;
  totalAmount: number;
  lineItems: Array<{ id: number; description: string; amount: number; procedureCode: string; member: string }>;
}

export default function Dashboard() {
  // State for modal visibility
  const [showAddMember, setShowAddMember] = useState(false);
  const [showBillDetails, setShowBillDetails] = useState(false);
  const [showDisputeChat, setShowDisputeChat] = useState(false);
  const [showCoverageReport, setShowCoverageReport] = useState(false);

  // Dummy current user data
  const [currentUser] = useState({
    name: "John Smith",
    avatar: "https://via.placeholder.com/150",
  });

  // Dummy family data
  const [familyData, setFamilyData] = useState<FamilyData>({
    name: "Smith Family",
    members: [
      {
        id: 1,
        name: "Alice",
        role: "Member",
        insurance: "Insurer Inc.",
        avatar: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Bob",
        role: "Member",
        insurance: "Insurer Inc.",
        avatar: "https://via.placeholder.com/150",
      },
    ],
  });

  // Dummy billing data with full details
  const [billData] = useState<BillData>({
    provider: "Insurance Inc.",
    totalAmount: 350,
    lineItems: [
      {
        id: 1,
        description: "Medical Bill",
        amount: 200,
        procedureCode: "001",
        member: "Alice",
      },
      {
        id: 2,
        description: "Pharmacy",
        amount: 150,
        procedureCode: "002",
        member: "Bob",
      },
    ],
  });

  // Handler for adding a family member
  function handleAddFamilyMember(member: FamilyMember) {
    setFamilyData({
      ...familyData,
      members: [...familyData.members, member],
    });
    setShowAddMember(false);
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-r bg-[#05081C] flex">
        {/* Sidebar Navigation */}
        <nav className="w-64 bg-gray-900 border-r border-gray-700 flex flex-col shadow-xl">
          <div className="p-6 border-b border-gray-700">
            <h1 className="text-2xl font-bold text-blue-300 flex items-center gap-2">
              <Shield className="h-8 w-8" />
              MediBill Hub
            </h1>
          </div>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start gap-2 text-blue-200 hover:text-blue-100">
                <Home className="h-5 w-5" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 text-blue-200 hover:text-blue-100">
                <Users className="h-5 w-5" />
                Family Members
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 text-blue-200 hover:text-blue-100">
                <Wallet className="h-5 w-5" />
                Bills & Payments
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 text-blue-200 hover:text-blue-100">
                <Shield className="h-5 w-5" />
                Insurance
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 text-blue-200 hover:text-blue-100">
                <AlertCircle className="h-5 w-5" />
                Disputes
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 text-blue-200 hover:text-blue-100">
                <BarChart className="h-5 w-5" />
                Reports
              </Button>
            </div>
          </ScrollArea>
          <div className="p-4 border-t border-gray-700">
            <Button variant="ghost" className="w-full justify-start gap-2 text-blue-200 hover:text-blue-100">
              <Settings className="h-5 w-5" />
              Settings
            </Button>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <header className="bg-gray-800 border-b border-gray-700 shadow-md">
            <div className="px-8 py-5 flex justify-between items-center">
              <div className="flex items-center gap-6">
                <Input
                  placeholder="Search bills, members, or disputes..."
                  className="w-96 bg-gray-700 text-white placeholder-gray-400 border-gray-600"
                />
                <Badge variant="outline" className="border-green-500 text-green-400">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                  System Status: Operational
                </Badge>
              </div>
              <div className="flex items-center gap-6">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                      <Bell className="h-6 w-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Notifications</TooltipContent>
                </Tooltip>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2 text-gray-300 hover:text-white">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={currentUser.avatar} />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <span>{currentUser.name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-gray-800 text-gray-300 border-gray-700" align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Security</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          <main className="flex-1 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Quick Actions Panel */}
              <Card className="lg:col-span-3 bg-gray-800 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-blue-300">Quick Actions</CardTitle>
                    <Badge variant="secondary">Last updated: 2m ago</Badge>
                  </div>
                </CardHeader>
                <CardContent className="grid grid-cols-4 gap-6">
                  <QuickActionCard
                    icon={<UserPlus className="h-6 w-6 text-blue-400" />}
                    title="Add Member"
                    onClick={() => setShowAddMember(true)}
                  />
                  <QuickActionCard
                    icon={<CreditCard className="h-6 w-6 text-green-400" />}
                    title="Bill Detail"
                    onClick={() => setShowBillDetails(true)}
                  />
                  <QuickActionCard
                    icon={<MessageSquare className="h-6 w-6 text-purple-400" />}
                    title="Start Dispute"
                    onClick={() => setShowDisputeChat(true)}
                  />
                  <QuickActionCard
                    icon={<PieChart className="h-6 w-6 text-orange-400" />}
                    title="Generate Report"
                    onClick={() => setShowCoverageReport(true)}
                  />
                </CardContent>
              </Card>

              {/* Family Overview */}
              <Card className="lg:col-span-2 bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-300">
                    <Users className="h-6 w-6" /> Family Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <FamilyOverview familyData={familyData} />
                </CardContent>
              </Card>

              {/* Billing Summary */}
              <Card className="bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-300">
                    <Wallet className="h-6 w-6" /> Billing Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BillSummary billData={billData} />
                </CardContent>
              </Card>

              {/* Coverage Analytics */}
              <Card className="lg:col-span-2 bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-300">
                    <BarChart className="h-6 w-6" /> Coverage Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-72 bg-gray-700 rounded-lg flex items-center justify-center text-blue-200">
                    <span>Coverage chart placeholder</span>
                  </div>
                </CardContent>
              </Card>

              {/* Active Disputes */}
              <Card className="bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-300">
                    <AlertCircle className="h-6 w-6" /> Active Disputes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <DisputesOverview onOpenChat={() => setShowDisputeChat(true)} />
                </CardContent>
              </Card>
            </div>
          </main>
        </div>

        {/* Modals and overlays */}
        <AnimatePresence>
          {showAddMember && (
            <AddFamilyMember
              onClose={() => setShowAddMember(false)}
              onAddMember={handleAddFamilyMember}
            />
          )}
          {showBillDetails && (
            <BillDetails
              onClose={() => setShowBillDetails(false)}
              // Additional props as needed.
            />
          )}
          {showDisputeChat && (
            <DisputeChat
              onClose={() => setShowDisputeChat(false)}
              // Additional props as needed.
            />
          )}
          {showCoverageReport && (
            <GuidedTour
              onClose={() => setShowCoverageReport(false)}
              // Additional props as needed.
            />
          )}
        </AnimatePresence>
      </div>
    </TooltipProvider>
  );
}

// Updated QuickActionCard component with smooth scale and fade animations.
function QuickActionCard({ icon, title, onClick }: { icon: React.ReactNode; title: string; onClick: () => void }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onClick}>
      <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-gray-700">{icon}</div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

