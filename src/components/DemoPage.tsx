
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Import demo components for each step of the process
import { FamilyAccount } from "../components/demo/FamilyAccount"
import { BillingInformation } from "../components/demo/BillingInfo"
import { InsuranceProfiles } from "../components/demo/InsuranceProfile"
import { InsuranceCoverageBreakdown } from "../components/demo/InsuranceCoverage"
import { BillSplit } from "../components/demo/BillSplit"
import { DisputeProcess } from "../components/demo/DisputeProcess"
import { FinalResolution } from "../components/demo/FinalResolution"

// Audio file for notifications (ensure this file is in your public folder)
const notificationSound = "/mixkit-message-pop-alert-2354.mp3"

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
]

// Define each step in the process with its component, props, and duration

type Step = {
  title: string;
  component: React.ComponentType<any>;
  props: any;
  duration: number;
}

const steps: Step[] = [
  { 
    title: "Family Account", 
    component: FamilyAccount,
    props: { 
      familyData: {
        familyName: "Smith",
        members: [
          { name: "John", role: "Admin"},
          { name: "Sarah", role: "Contributor"},
          { name: "Emma", role: "Dependent" },
        ]
      }
    },
    duration: 4000 // Duration in milliseconds
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
        ]
      }
    },
    duration: 4000
  },
  { 
    title: "Insurance Profiles", 
    component: InsuranceProfiles,
    props: { 
      profiles: [
        { name: "John", type: "PPO", details: "$500 deductible met, 80% coverage" },
        { name: "Sarah", type: "HDHP", details: "$1,000 deductible, 70% coverage" },
        { name: "Emma", type: "No Insurance", details: "Covered under John's plan" }
      ]
    },
    duration: 4000
  },
  { 
    title: "Coverage Breakdown", 
    component: InsuranceCoverageBreakdown,
    props: { 
      items: [
        { lineItem: "ER Visit", member: "Emma", insuranceCovered: "John's PPO: 80% of $1,200", personalResponsibility: 240 },
        { lineItem: "X-Ray", member: "John", insuranceCovered: "John's PPO: 80% of $800", personalResponsibility: 160 }
      ]
    },
    duration: 4000
  },
  { 
    title: "Initial Bill Split", 
    component: BillSplit,
    props: { 
      items: [
        { member: "John", amount: 200 },
        { member: "Sarah", amount: 200 }
      ],
      isInitial: true
    },
    duration: 4000
  },
  { 
    title: "Dispute Process", 
    component: DisputeProcess,
    props: { 
      messages: [
        { member: "Sarah", message: "I don't think I should pay for John's X-Ray." },
        { member: "John", message: "whats the problem sarah?" },
        { member: "Sarah", message: "I am broke lol!" },
        { member: "John", message: "we can fix it! 🤗" },
        { member: "Sarah", message: "How about a 60-40 split based on usage?" },
        { member: "John", message: "That sounds fair. I agree." }
      ]
    },
    duration: 15000 // Longer duration for this step
  },
  { 
    title: "Final Bill Split", 
    component: BillSplit,
    props: { 
      items: [
        { member: "John", amount: 240, percentage: 60 },
        { member: "Sarah", amount: 160, percentage: 40 }
      ],
      isInitial: false
    },
    duration: 4000
  },
  { 
    title: "Final Resolution", 
    component: FinalResolution,
    props: {
      resolution: "Dispute resolved. Final split: John $240 (60%), Sarah $160 (40%)",
      timestamp: "11:15 AM"
    },
    duration: 4000
  }
]

export default function Page() {
  // State to keep track of the current active step
  const [currentStep, setCurrentStep] = useState(0)
  
  // State for notification message and its visibility
  const [notification, setNotification] = useState("")
  const [isNotificationVisible, setIsNotificationVisible] = useState(false)
  
  // Flag to indicate whether the demo has started
  const [started, setStarted] = useState(false)
  
  // Ref to hold the audio element for playing notifications
  const audioRef = useRef<HTMLAudioElement | null>(null)
  
  // Refs for each step element, used for auto-scrolling
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  
  // Ref for the container element (if you want to manipulate it later)
  const containerRef = useRef<HTMLDivElement>(null)
  

  // Initialize the audio element once when the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(notificationSound)
      audioRef.current.preload = "auto"
    }
  }, [])

  // Auto-scroll to the current step when it changes
  useEffect(() => {
    if (!started) return
    
    const currentRef = stepRefs.current[currentStep]
    if (currentRef) {
      // Scroll the current step into view smoothly
      currentRef.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      })
    }
  }, [currentStep, started])

  // Main controller to handle notifications and step progression
  useEffect(() => {
    // Only run if the demo has started
    if (!started) return
    
    let timeout: NodeJS.Timeout
    let notificationTimeout: NodeJS.Timeout

    // Function to play a notification sound and show the message
    const playNotification = async (message: string) => {
      setNotification(message)
      setIsNotificationVisible(true)
      
      try {
        if (audioRef.current) {
          // Reset audio and play notification
          audioRef.current.currentTime = 0
          await audioRef.current.play()
        }
      } catch (error) {
        console.warn("Audio playback failed:", error)
      }

      // Hide the notification after 3 seconds
      notificationTimeout = setTimeout(() => {
        setIsNotificationVisible(false)
      }, 3000)
    }

    // Get the duration for the current step
    const currentDuration = steps[currentStep].duration

    // Play the corresponding notification for the current step (if available)
    if (stepNotifications[currentStep]) {
      playNotification(stepNotifications[currentStep])
    }

    // Set a timeout to automatically move to the next step after the duration
    timeout = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1)
      }
    }, currentDuration)

    // Clean up the timers when the effect re-runs or component unmounts
    return () => {
      clearTimeout(timeout)
      clearTimeout(notificationTimeout)
    }
  }, [currentStep, started])

  // Handler to start the demo; also triggers initial audio playback to enable sound
  const handleStart = () => {
    setStarted(true)
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("Audio playback requires user interaction")
      })
    }
  }

  // If the demo hasn't started, display a start screen with a button
  if (!started) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <button
          onClick={handleStart}
          className="px-8 py-4 bg-green-500/20 border-2 border-green-500 rounded-xl 
                     text-2xl font-bold neon-text hover:bg-green-500/30 transition-all
                     animate-pulse"
        >
          Start Demo ▶
        </button>
      </div>
    )
  }

  // Render the main demo interface once started
  return (
    <div className="min-h-screen bg-gray-900 text-green-500 py-8 font-mono overflow-hidden">
      {/* Notification Popup */}
      <AnimatePresence>
        {isNotificationVisible && (
          <motion.div
            // Animation for the notification popup entering/exiting
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 bg-gray-800 border-2 border-green-500/50 rounded-xl p-4 shadow-lg shadow-green-500/20 z-50"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>{notification}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-12 neon-text">
        Medical Bill Processing
      </h1>

      <div className="relative max-w-7xl mx-auto px-4" ref={containerRef}>
        {/* Vertical Timeline on the left */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-green-500 shadow-neon">
          {steps.map((_, index) => (
            <div
              key={index}
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-900 border-2 border-green-500"
              style={{ top: `${(index * 100) / (steps.length - 1)}%` }}
            >
              {/* Inner dot indicates if the step is active or completed */}
              <div className={`w-2 h-2 rounded-full mx-auto ${
                index <= currentStep ? 'bg-green-500 animate-pulse' : 'bg-gray-700'
              }`} />
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="relative space-y-32">
          {steps.map((step, index) => (
            <AnimatePresence key={step.title}>
              {/* Only render steps that are current or have already been completed */}
              {index <= currentStep && (
                <motion.div
                  // Save the reference for auto-scrolling
                  ref={(el) => (stepRefs.current[index] = el)}
                  // Animation for each step as it enters the view
                  initial={{ opacity: 0, x: index % 2 === 0 ? '-100%' : '100%' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, type: 'spring' }}
                  className={`relative w-full ${index % 2 === 0 ? 'pr-[55%]' : 'pl-[55%]'}`}
                >
                  <div className={`w-full ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className={`p-8 bg-gray-800 rounded-2xl border-2 shadow-lg ${
                      // Highlight the currently active step
                      index === currentStep 
                        ? 'border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.5)]' 
                        : 'border-gray-700 opacity-75'
                    }`}>
                      {/* Header for each step */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          {/* Step number circle */}
                          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                            {index + 1}
                          </div>
                          {/* Step title */}
                          <h2 className="text-2xl font-semibold text-blue-400">{step.title}</h2>
                        </div>
                        {/* Display "Active" indicator for the current step */}
                        {index === currentStep && (
                          <div className="flex items-center gap-2 text-green-500">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm">Active</span>
                          </div>
                        )}
                      </div>

                      {/* Container for the demo component of the step */}
                      <div className="max-h-[500px] overflow-y-auto custom-scroll pr-4">
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
  )
}
