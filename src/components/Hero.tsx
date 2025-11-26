import { ArrowDown, Github, Linkedin, Mail, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AnimatedText from '@/components/AnimatedText';
import { useNavigate } from 'react-router-dom';
import ThreeBackground from '@/components/Threebackground'

const Hero = () => {
  const navigate = useNavigate();
  const skills = [
    'React',
    'THREEjs',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JavaScript',
    'HTML/CSS',
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* ⭐ New 3D Background */}
      <ThreeBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">

          {/* Profile Section */}
          <div className="mb-6 sm:mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full p-1 shadow-glow bg-gradient-primary">
              <img
                src="/profile.jpeg"
                alt="Rajasekar"
                className="w-full h-full object-cover rounded-full border-4 border-surface"
              />
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-4">
              <AnimatedText
                text="Hi, I'm Rajasekar.S"
                className="text-gradient"
                delay={0.8}
                letterDelay={0.1}
              />
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 sm:mb-6">
              <AnimatedText
                text="MERN Stack Developer..."
                delay={2.2}
                letterDelay={0.08}
              />
            </p>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              Passionate full-stack developer with 1.9 years of experience
              crafting modern web applications using React, Node.js, Express.js,
              and MongoDB. I love turning complex problems into elegant
              solutions.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-muted-foreground">
              Technologies I Work With
            </h3>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              {skills.map((skill, index) => (
                <Card
                  key={skill}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-surface-alt border-border hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="text-xs sm:text-sm font-mono font-medium">
                    {skill}
                  </span>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-12">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              onClick={() => navigate('/contact')}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Get In Touch
            </Button>

            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              onClick={() => navigate('/Resume')}
            >
              <Eye className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-10 sm:mb-12">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="hover-glow transition-all duration-300">
                <Github className="h-5 w-5" />
              </Button>
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="hover-glow transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>

            <a href="mailto:rajahulk@gmail.com">
              <Button variant="ghost" size="sm" className="hover-glow transition-all duration-300">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
