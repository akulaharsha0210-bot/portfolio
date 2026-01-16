import { useEffect, useRef, useState } from "react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Software Testing",
    skills: [
      "Manual Testing",
      "Test Case Design",
      "Bug Tracking",
      "Smoke Testing",
      "Regression Testing",
      "UI Testing",
      "Cross-browser Testing",
      "Boundary Value Analysis",
    ],
  },
  {
    title: "UI/UX Design",
    skills: [
      "Wireframing",
      "Prototyping",
      "User Flow Mapping",
      "Visual Hierarchy",
      "Typography",
      "Color Theory",
      "Accessibility",
      "Design Systems",
    ],
  },
  {
    title: "Languages",
    skills: ["Python", "C", "C++", "HTML", "CSS", "SQL"],
  },
  {
    title: "Tools & Frameworks",
    skills: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Postman",
      "Jira",
      "Git",
      "Selenium",
      "MySQL",
    ],
  },
  {
    title: "Development Tools",
    skills: ["VSCode", "PyCharm", "Bootstrap", "Scrum", "Kanban"],
  },
];

const Skills = () => {
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
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 bg-gradient-subtle relative"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-primary font-medium mb-2">What I Can Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Skills & Expertise
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 ${
                isVisible ? `animate-fade-in-up delay-${(categoryIndex + 1) * 100}` : "opacity-0"
              }`}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 pb-3 border-b border-border">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
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

export default Skills;
