import { useEffect, useRef, useState } from "react";
import { ExternalLink, TestTube, Palette, Code2 } from "lucide-react";

interface Project {
  title: string;
  role: string;
  description: string;
  tools: string[];
  icon: typeof TestTube;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "OpenCart E-Commerce Platform",
    role: "Manual Testing",
    description:
      "Tested the frontend of OpenCart, an open-source e-commerce platform, focusing on verifying user flows such as product search, cart operations, user registration, and checkout to ensure a seamless and bug-free shopping experience.",
    tools: ["Jira", "Zephyr", "Excel"],
    icon: TestTube,
    highlights: [
      "Designed and executed 35+ manual test cases",
      "Conducted Smoke, Regression, and UI Testing",
      "Cross-browser testing on Chrome, Firefox, Edge",
      "Maintained test documentation and traceability matrix",
    ],
  },
  {
    title: "Cleveland Website Redesign",
    role: "UI/UX Designer",
    description:
      "Led the complete redesign of the Cleveland website based on a detailed Request for Proposal (RFP). Enhanced overall usability and accessibility through structured design decisions.",
    tools: ["Figma", "Adobe XD"],
    icon: Palette,
    highlights: [
      "Conducted UX research and heuristic evaluation",
      "Competitor analysis and persona creation",
      "Fully responsive desktop and mobile layouts",
      "Delivered final design within 2 weeks",
    ],
  },
  {
    title: "Rave Support Portal (RSP) App",
    role: "UI/UX Optimization",
    description:
      "Redesigned the Rave Support Portal to simplify and improve internal user interactions. Aimed to reduce form-filling time by 50% and increase form submissions by 10%.",
    tools: ["Figma", "Prototyping"],
    icon: Palette,
    highlights: [
      "Streamlined user-friendly interface",
      "Optimized information architecture",
      "Enhanced form layouts for clarity",
      "Aligned with business and user goals",
    ],
  },
  {
    title: "Secure File Transfer with QR Code",
    role: "Full-Stack Developer",
    description:
      "Built a Flask application for secure file sharing with AWS S3 and QR code technology, enabling cross-device downloads without a shared network.",
    tools: ["Flask", "AWS S3", "Python", "QR Code"],
    icon: Code2,
    highlights: [
      "Drag-and-drop upload interface",
      "Encrypted storage and input validation",
      "Rate limiting for security",
      "Seamless cross-device access via QR",
    ],
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group p-8 rounded-2xl bg-card shadow-card hover:shadow-card-hover border border-transparent hover:border-primary/20 transition-all duration-300 ${
                isVisible ? `animate-fade-in-up delay-${(index + 1) * 100}` : "opacity-0"
              }`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary text-sm font-medium">{project.role}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
