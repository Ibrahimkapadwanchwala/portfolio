export const projects = [
  {
    title: "CardioGuard",
    type:"group project",
    subtitle: "Real-Time Health Monitoring",
    description: "Architected a real-time health monitoring system supporting 1000+ concurrent users with continuous vitals streaming.",
    highlights: [
      "Increased capacity from 150 req/sec to 250+ req/sec",
      "Reduced false alerts by 40% using cooldown logic",
      "Emergency assignment time reduced to <1 second"
    ],
    tech: ["Node.js", "Redis", "Socket.io", "BullMQ", "MySQL"]
  },
  {
    title: "SecureSend",
    type:"personal project",
    subtitle: "Transactional Wallet System",
    description: "High-concurrency financial system supporting simultaneous transactions with zero data inconsistency.",
    highlights: [
      "100% financial accuracy with double-entry ledger",
      "Reduced duplicate transaction risk by 90%",
      "Improved success rate under high load using retries"
    ],
    tech: ["Node.js", "Express.js", "MySQL", "JWT"]
  },
  {
    title: "Infinova CMS",
    type:"internship project",
    subtitle: "Backend Management System",
    description: "Modular backend architecture for dynamic content operations with efficient CRUD workflows.",
    highlights: [
      "Reduced query response time by 30%",
      "Admin dashboard for courses and testimonials",
      "Modular architecture for easy feature extensions"
    ],
    tech: ["Node.js", "MongoDB", "Express.js"]
  }
];