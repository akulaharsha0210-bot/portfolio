import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Artificial Intelligence",
    institution: "Parul University",
    location: "Vadodara, Gujarat",
    period: "2022 – 2026",
  },
  {
    degree: "12th (MPC)",
    institution: "Modern Junior College",
    location: "Ramachandrapuram, Andhra Pradesh",
    period: "2020 – 2022",
  },
  {
    degree: "10th",
    institution: "Little Rose School",
    location: "Draksharamam, Andhra Pradesh",
    period: "2020",
  },
];

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-primary font-medium mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {educationData.map((item, index) => (
            <div
              key={item.degree}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                isVisible ? `animate-fade-in-up delay-${(index + 1) * 200}` : "opacity-0"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg md:-translate-x-1/2 z-10" />

              {/* Content Card */}
              <div
                className={`ml-20 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-[50%] md:pr-12" : "md:ml-[50%] md:pl-12"
                } flex-1`}
              >
                <div className="p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                        {item.period}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {item.degree}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {item.institution}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
