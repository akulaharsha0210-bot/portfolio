import { useEffect, useRef, useState } from "react";
import { Code2, Palette, TestTube, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: TestTube,
    title: "Software Testing",
    description: "Manual testing, test case design, and bug tracking expertise",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Wireframing, prototyping, and user-centered design solutions",
  },
  {
    icon: Sparkles,
    title: "AI Tools",
    description: "Leveraging modern AI tools to enhance productivity",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Python, C++, HTML/CSS, and modern frameworks",
  },
];

const About = () => {
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
    <section
      ref={sectionRef}
      id="about"
      className="py-24 bg-background relative"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-primary font-medium mb-2">Get to Know Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 ${isVisible ? "animate-slide-in-left delay-200" : "opacity-0"}`}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am a <span className="text-foreground font-medium">Computer Science (Artificial Intelligence)</span> student 
              with a strong interest and hands-on experience in software testing and UI/UX designing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am familiar with modern AI tools and use them to improve productivity and design quality. 
              My approach combines technical precision with creative problem-solving, allowing me to deliver 
              comprehensive solutions across testing, design, and AI-assisted tasks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am always eager to learn and adapt to new technologies, bringing a versatile skill set 
              to any team. Whether it's ensuring software quality through rigorous testing, crafting 
              intuitive user interfaces, or implementing AI-powered features, I am ready to contribute 
              and grow.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Let's connect
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`p-6 rounded-xl bg-secondary/50 border border-border hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 group ${
                  isVisible ? `animate-scale-in delay-${(index + 3) * 100}` : "opacity-0"
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
