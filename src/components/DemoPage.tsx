import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import demo components for each step of the process
import { FamilyAccount } from "../components/demo/FamilyAccount";
import { BillingInformation } from "../components/demo/BillingInfo";
import { InsuranceProfiles } from "../components/demo/InsuranceProfile";
import { InsuranceCoverageBreakdown } from "../components/demo/InsuranceCoverage";
import { BillSplit } from "../components/demo/BillSplit";
import { DisputeProcess } from "../components/demo/DisputeProcess";
import { FinalResolution } from "../components/demo/FinalResolution";

// Audio file for notifications (ensure this file is in your public folder)
const notificationSound = "/mixkit-message-pop-alert-2354.mp3";

// Notification messages corresponding to each step
const stepNotifications = [
  "🏠 Family account created for Smith family",
  "💸 New medical bill received: $2,000 total",
  "📄 Insurance profiles loaded for all family members",
  "📊 Insurance coverage calculated for all claims",
  "💳 New $2,000 bill split: $200 each (John, Sarah)",
  "⚠️ Dispute opened on ER Visit (John)",
  "🤝 New shares: John $240, Sarah $160 (John, Sarah)",
  "✅ Sarah paid $160 (John)",
  "✅ John paid $240 (Sarah)"
];

// Define each step in the process with its component, props, and duration
type Step = {
  title: string;
  component: React.ComponentType<any>;
  props: any;
  duration: number;
};

const steps: Step[] = [
  {
    title: "Family Account",
    component: FamilyAccount,
    props: {
      familyData: {
        familyName: "Smith",
        members: [
          { name: "John", role: "Admin" },
          { name: "Sarah", role: "Contributor" },
          { name: "Emma", role: "Dependent" },
        ],
      },
    },
    duration: 4000,
  },
  {
    title: "Billing Information",
    component: BillingInformation,
    props: {
      billingData: {
        total: 2000,
        lineItems: [
          { description: "ER Visit", amount: 1200, member: "Emma" },
          { description: "X-Ray", amount: 800, member: "John" },
        ],
      },
    },
    duration: 4000,
  },
  {
    title: "Insurance Profiles",
    component: InsuranceProfiles,
    props: {
      profiles: [
        { name: "John", type: "PPO", details: "$500 deductible met, 80% coverage" },
        { name: "Sarah", type: "HDHP", details: "$1,000 deductible, 70% coverage" },
        { name: "Emma", type: "No Insurance", details: "Covered under John's plan" },
      ],
    },
    duration: 4000,
  },
  {
    title: "Coverage Breakdown",
    component: InsuranceCoverageBreakdown,
    props: {
      items: [
        {
          lineItem: "ER Visit",
          member: "Emma",
          insuranceCovered: "John's PPO: 80% of $1,200",
          personalResponsibility: 240,
        },
        {
          lineItem: "X-Ray",
          member: "John",
          insuranceCovered: "John's PPO: 80% of $800",
          personalResponsibility: 160,
        },
      ],
    },
    duration: 4000,
  },
  {
    title: "Initial Bill Split",
    component: BillSplit,
    props: {
      items: [
        { member: "John", amount: 200 },
        { member: "Sarah", amount: 200 },
      ],
      isInitial: true,
    },
    duration: 4000,
  },
  {
    title: "Dispute Process",
    component: DisputeProcess,
    props: {
      messages: [
        { member: "Sarah", message: "I don't think I should pay for John's X-Ray." },
        { member: "John", message: "What's the problem, Sarah?" },
        { member: "Sarah", message: "I am broke lol!" },
        { member: "John", message: "We can fix it! 🤗" },
        { member: "Sarah", message: "How about a 60-40 split based on usage?" },
        { member: "John", message: "That sounds fair. I agree." },
      ],
    },
    duration: 15000,
  },
  {
    title: "Final Bill Split",
    component: BillSplit,
    props: {
      items: [
        { member: "John", amount: 240, percentage: 60 },
        { member: "Sarah", amount: 160, percentage: 40 },
      ],
      isInitial: false,
    },
    duration: 4000,
  },
  {
    title: "Final Resolution",
    component: FinalResolution,
    props: {
      resolution:
        "Dispute resolved. Final split: John $240 (60%), Sarah $160 (40%)",
      timestamp: "11:15 AM",
    },
    duration: 4000,
  },
];

export default function Page() {
  // State for the current active step
  const [currentStep, setCurrentStep] = useState(0);
  // Notification state
  const [notification, setNotification] = useState("");
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  // Flag to indicate demo start
  const [started, setStarted] = useState(false);
  // Audio ref for notifications
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Refs for each step (for auto-scrolling)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Container ref (if needed)
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize audio once on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(notificationSound);
      audioRef.current.preload = "auto";
    }
  }, []);

  // Auto-scroll to the current step when it changes
  useEffect(() => {
    if (!started) return;
    const currentRef = stepRefs.current[currentStep];
    if (currentRef) {
      currentRef.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [currentStep, started]);

  // Handle notifications and auto progression of steps
  useEffect(() => {
    if (!started) return;
    let timeout: NodeJS.Timeout;
    let notificationTimeout: NodeJS.Timeout;

    const playNotification = async (message: string) => {
      setNotification(message);
      setIsNotificationVisible(true);
      try {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          await audioRef.current.play();
        }
      } catch (error) {
        console.warn("Audio playback failed:", error);
      }
      notificationTimeout = setTimeout(() => {
        setIsNotificationVisible(false);
      }, 3000);
    };

    const currentDuration = steps[currentStep].duration;
    if (stepNotifications[currentStep]) {
      playNotification(stepNotifications[currentStep]);
    }
    timeout = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      }
    }, currentDuration);

    return () => {
      clearTimeout(timeout);
      clearTimeout(notificationTimeout);
    };
  }, [currentStep, started]);

  // Start handler (ensures audio is unlocked on mobile)
  const handleStart = () => {
    setStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("Audio playback requires user interaction");
      });
    }
  };

  // If demo hasn't started, show a start screen
  if (!started) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 neon-text text-center">
          Medical Bill Processing Demo
        </h1>
        <button
          onClick={handleStart}
          className="px-8 py-4 bg-green-500/20 border-2 border-green-500 rounded-xl text-2xl font-bold neon-text hover:bg-green-500/30 transition-all animate-pulse"
        >
          Start Demo ▶
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-green-500 py-8 font-mono overflow-x-hidden">
      {/* Notification Popup */}
      <AnimatePresence>
        {isNotificationVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 bg-gray-800 border-2 border-green-500/50 rounded-xl p-4 shadow-lg shadow-green-500/20 z-50"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm">{notification}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Header */}
      <header className="text-center mb-8 px-4">
        <h1 className="text-2xl md:text-4xl font-bold neon-text">
          Medical Bill Processing
        </h1>
      </header>

      <div className="relative max-w-7xl mx-auto px-4" ref={containerRef}>
        {/* Desktop Timeline */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-green-500 shadow-neon" />

        {/* Process Steps */}
        <div className="space-y-12 md:space-y-32">
          {steps.map((step, index) => (
            <AnimatePresence key={step.title}>
              {index <= currentStep && (
                <motion.div
                  ref={(el) => (stepRefs.current[index] = el)}
                  initial={{ opacity: 0, x: index % 2 === 0 ? "-100%" : "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className={`relative px-4 ${
                    // On desktop, alternate side padding; on mobile use full width
                    index % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"
                  }`}
                >
                  <div
                    className={`w-full ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    } p-4 md:p-8`}
                  >
                    <div
                      className={`p-6 md:p-8 bg-gray-800 rounded-2xl border-2 shadow-lg ${
                        index === currentStep
                          ? "border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.5)]"
                          : "border-gray-700 opacity-75"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                            {index + 1}
                          </div>
                          <h2 className="text-lg md:text-2xl font-semibold text-blue-400">
                            {step.title}
                          </h2>
                        </div>
                        {index === currentStep && (
                          <div className="mt-2 md:mt-0 flex items-center gap-2 text-green-500">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm">Active</span>
                          </div>
                        )}
                      </div>

                      {/* Demo Component Container */}
                      <div className="max-h-64 md:max-h-[500px] overflow-y-auto custom-scroll pr-4">
                        <step.component {...step.props} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  );
}
