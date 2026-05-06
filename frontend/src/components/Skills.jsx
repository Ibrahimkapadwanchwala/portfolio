import "./Skills.css";

const skills = [
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#ffffff" },
      { name: "REST APIs", icon: null, color: "#00f2fe" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", color: "#DC382D" },
    ],
  },
  {
    title: "Security",
    items: [
      { name: "JWT Auth", icon: null, color: "#fbbf24" },
      { name: "RBAC", icon: null, color: "#f87171" },
      { name: "Rate Limiting", icon: null, color: "#60a5fa" },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
      { name: "Vercel", icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png", color: "#ffffff" },
      { name: "Railway", icon: "https://railway.app/brand/logo-light.png", color: "#000000" },
    ],
  },
  {
    title: "Languages & Tools",
    items: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "#00599C" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", color: "#FF6C37" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <div key={i} className="skill-card">
              <h3>{group.title}</h3>
              <div className="skill-items">
                {group.items.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="skill-pill" 
                    style={{ "--brand-color": item.color }}
                  >
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="skill-logo"
                      />
                    )}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}