const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for getting started",
    price: 0,
    billingCycle: "Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
    isPopular: false,
  },
  {
    name: "Pro",
    description: "Best for professionals",
    price: 29,
    billingCycle: "Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
    isPopular: true,
  },
  {
    name: "Enterprise",
    description: "For teams and businesses",
    price: 99,
    billingCycle: "Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
    isPopular: false,
  },
];
export default pricingPlans;
