// src/data/projectData.js

export const detailedProjects = {
  "CardioGuard": {
    title: "CardioGuard",
    type: "Personal Project",
    image: "/cardioGuardArchitecture.png",
    github: "https://github.com/Ibrahimkapadwanchwala/cardioGuard", // Placeholder
    description: "Architected a real-time health monitoring system supporting 1000+ concurrent users with continuous vitals streaming and intelligent alert detection.",
    metrics: [
      { value: "1000+", label: "Concurrent Users" },
      { value: "250+", label: "Req/Sec Throughput" },
      { value: "<1s", label: "Geo-Routing Speed" }
    ],
    highlights: [
      "Designed an event-driven, asynchronous processing pipeline using Redis and BullMQ.",
      "Increased processing capacity from 150 req/sec to 250+ req/sec through distributed worker architecture.",
      "Built an intelligent alert detection engine reducing false alerts by 40%.",
      "Implemented geo-proximity hospital routing using the Haversine formula."
    ],
    tech: ["Node.js", "Express.js", "MySQL", "Redis", "Socket.io", "BullMQ"]
  },
  "SecureSend": {
    title: "SecureSend",
    type: "Personal Project",
    image: "/secureSendArchitecture.png",
    github: "https://github.com/Ibrahimkapadwanchwala/SecureSend",
    description: "High-concurrency financial system supporting simultaneous wallet transactions with zero data inconsistency and full auditability.",
    metrics: [
      { value: "100%", label: "Financial Accuracy" },
      { value: "90%", label: "Risk Reduction" },
      { value: "Zero", label: "Inconsistency" }
    ],
    highlights: [
      "Engineered a high-concurrency financial system supporting simultaneous transactions with zero data inconsistency.",
      "Implemented a double-entry ledger ensuring 100% financial accuracy across all transactions.",
      "Designed idempotent APIs reducing duplicate transaction risk by 90% in retry scenarios.",
      "Secured financial endpoints with JWT authentication and rate limiting."
    ],
    tech: ["Node.js", "Express.js", "MySQL", "JWT"]
  },
  "Infinova CMS": {
    title: "Infinova CMS",
    type: "Internship Project",
    image: "/cmsArchitecture.png",
    github: "https://github.com/Ibrahimkapadwanchwala/InfinovaCompanyWebsite", // Placeholder
    description: "A robust backend content management system designed for modularity, supporting dynamic content operations for courses, testimonials, and services with optimized data retrieval.",
    metrics: [
      { value: "30%", label: "Query Speed Boost" },
      { value: "Modular", label: "Architecture" },
      { value: "NoSQL", label: "Optimized Schema" }
    ],
    highlights: [
      "Designed REST APIs handling dynamic content operations with efficient CRUD workflows.",
      "Structured MongoDB schemas improving query performance and reducing response time by 30%.",
      "Built a unified backend supporting multiple content types including courses, testimonials, and services.",
      "Ensured modular and scalable architecture, allowing for easy integration of new features and content modules.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Postman"]
  }
};