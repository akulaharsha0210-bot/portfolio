import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-hero pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-in-up">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl ring-4 ring-primary/10 animate-float">
              <img
                src={profileImage}
                alt="Akula Tanoj Harsha Vardhan"
                className="w-full h-full object-cover object-top"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
              <span className="text-primary-foreground text-xs font-semibold text-center leading-tight px-2">
                Open to<br />Work
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 animate-fade-in-up opacity-0 delay-100">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in-up opacity-0 delay-200">
              Akula Tanoj
              <br />
              <span className="text-gradient">Harsha Vardhan</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in-up opacity-0 delay-300">
              CSE – AI Student | UI/UX Designer | Software Tester
            </p>
            <p className="text-muted-foreground max-w-xl mb-8 animate-fade-in-up opacity-0 delay-400">
              Passionate about creating seamless user experiences and ensuring software quality 
              through meticulous testing. Combining AI knowledge with design thinking to build 
              products that truly matter.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up opacity-0 delay-500">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-secondary transition-all hover:scale-105"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in-up opacity-0 delay-600">
              <a
                href="mailto:akulaharsha210@gmail.com"
                className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/harsha-akula-2216693a6"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/akulaharsha0210-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
