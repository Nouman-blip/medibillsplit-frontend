export const plans = [
    {
      name: "Free",
      price: { monthly:0,yearly:0 },
      description: "Perfect for individuals getting started",
      features: [
        "Up to 3 family members",
        "Basic bill splitting",
        "Email support",
        "Simple dashboard",
        "Basic notifications",
        "1GB storage",
        ],
        monthlyPriceId: "pri_01jkqvz7d7vedszch66sayt25k", // Replace with your actual monthly price ID

      
    },
    {
      name: "Pro",
      price: { monthly: 9.99, yearly: 99.99 },
      description: "Ideal for families with regular medical expenses",
      features: [
        "Up to 10 family members",
        "Advanced bill splitting",
        "Priority support",
        "Advanced dashboard",
        "Custom notifications",
        "10GB storage",
        "Insurance tracking",
        "Payment history",
      ],
      popular: true,
      // Add your Paddle price IDs for Pro plan here
      monthlyPriceId: "pri_01jkr3jd07bw3ak6frgetfejg6", // Replace with your actual monthly price ID
      yearlyPriceId: "pri_01jkr3svf47wm46bxy96w70hs5",   // Replace with your actual yearly price ID
    },
    {
      name: "Enterprise",
      price: { monthly: 24.99, yearly: 249.99 },
      description: "For large families with complex medical needs",
      features: [
        "Unlimited family members",
        "Custom bill splitting rules",
        "24/7 dedicated support",
        "Custom dashboard",
        "Advanced analytics",
        "Unlimited storage",
        "Multi-insurance tracking",
        "Payment automation",
        "API access",
        "Custom integrations",
      ],
      // Add your Paddle price IDs for Enterprise plan here
      monthlyPriceId: "pri_01jkr4mgnz0q0qcxbfhma3jwy2", // Replace with your actual monthly price ID
      yearlyPriceId: "pri_01jkr4yd4n8dfg3wfp05hsmz3w",   // Replace with your actual yearly price ID
    },
  ];
  