export const routes = [
  {
    path: "/",
    key: "platform",
    label: "Platform",
    eyebrow: "Screen 01",
    title: "Institutional platform landing",
    description: "Adapted from the product marketing screen.",
  },
  {
    path: "/overview",
    key: "home",
    label: "Overview",
    eyebrow: "Program",
    title: "EcoData mock site",
    description: "A stitched multi-page demo for institutional economic intelligence.",
  },
  {
    path: "/dashboard",
    key: "dashboard",
    label: "Dashboard",
    eyebrow: "Screen 02",
    title: "Global macro dashboard",
    description: "Adapted from the economic intelligence platform view.",
  },
  {
    path: "/pricing",
    key: "pricing",
    label: "Pricing",
    eyebrow: "Screen 03",
    title: "Pricing and access tiers",
    description: "Adapted from the pricing plans screen.",
  },
  {
    path: "/users",
    key: "users",
    label: "Users",
    eyebrow: "Screen 04",
    title: "User management",
    description: "Adapted from the institutional access screen.",
  },
];

export const routeMap = Object.fromEntries(routes.map((route) => [route.key, route]));

export const macroMetrics = [
  { label: "Global GDP Growth", value: "2.4%", delta: "+0.3%", tone: "positive" },
  { label: "Consumer Price Index", value: "3.1%", delta: "+0.8%", tone: "negative" },
  { label: "Unemployment Rate", value: "3.8%", delta: "-0.1%", tone: "positive" },
  { label: "Commodity Volatility", value: "18.4", delta: "Live", tone: "neutral" },
];

export const sectors = [
  { name: "Technology", change: "+12.4%", tone: "positive", icon: "devices" },
  { name: "Financials", change: "+4.2%", tone: "positive", icon: "account_balance" },
  { name: "Energy", change: "-2.1%", tone: "negative", icon: "bolt" },
  { name: "Healthcare", change: "+0.8%", tone: "neutral", icon: "health_and_safety" },
];

export const pricingPlans = [
  {
    name: "Free",
    audience: "Basic Tier",
    price: "$0",
    suffix: "/month",
    accent: "default",
    cta: "Start exploring",
    features: ["5 queries / day", "Standard economic indices", "Basic export"],
  },
  {
    name: "Plus",
    audience: "Analyst Tier",
    price: "$129",
    suffix: "/month",
    accent: "quiet",
    badge: "Recommended",
    cta: "Unlock analyst tools",
    features: ["1,000 queries / day", "Dynamic charts", "REST API access"],
  },
  {
    name: "Pro",
    audience: "Organization Tier",
    price: "$499",
    suffix: "/month",
    accent: "highlight",
    badge: "Institutional Power",
    cta: "Request onboarding",
    features: ["Unlimited global queries", "Math AI full integration", "Priority support"],
  },
];

export const users = [
  {
    initials: "JD",
    name: "Jane Doe",
    email: "jane.doe@centralbank.gov",
    plan: "Enterprise",
    status: "Active",
    lastLogin: "Oct 12, 2023 · 14:24",
  },
  {
    initials: "MA",
    name: "Marcus Aurelius",
    email: "m.aurelius@investcorp.com",
    plan: "Institutional",
    status: "Active",
    lastLogin: "Oct 14, 2023 · 09:12",
  },
  {
    initials: "SL",
    name: "Sarah Lund",
    email: "s.lund@unipress.org",
    plan: "Academic",
    status: "Inactive",
    lastLogin: "Aug 21, 2023 · 11:45",
  },
  {
    initials: "EK",
    name: "Erik Karlsson",
    email: "e.karlsson@nordicfinance.se",
    plan: "Enterprise",
    status: "Suspended",
    lastLogin: "Oct 05, 2023 · 22:10",
  },
];
