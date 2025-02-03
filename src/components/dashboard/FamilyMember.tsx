"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Use the same FamilyMember interface as defined in Dashboard.
export interface FamilyMember {
  id: number;
  name: string;
  role: string;
  insurance: string;
  avatar: string;
}

export interface AddFamilyMemberProps {
  onClose: () => void;
  onAddMember: (member: FamilyMember) => void;
}

export function AddFamilyMember({
  onClose,
  onAddMember,
}: AddFamilyMemberProps) {
  // Local state for form fields.
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !role || !email) return;
    // Create a new family member.
    // Adjust the insurance or avatar logic as needed.
    const newMember: FamilyMember = {
      id: Date.now(), // simple unique id
      name,
      role,
      insurance: "Not Provided",
      avatar: "https://via.placeholder.com/150",
    };
    onAddMember(newMember);
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-[#05081C] dark:bg-gray-800 rounded-lg p-6 w-full max-w-md"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Add Family Member
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="role">Role</Label>
            <Select onValueChange={(value) => setRole(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Member">Member</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button className="w-full" type="submit">
            Add Member
          </Button>
        </form>
      </motion.div>
    </motion.div>
  );
}
