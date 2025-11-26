import { ExternalLink, Github, Bot, Box } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Koinpark Bot',
      description: 'An intelligent trading bot designed for cryptocurrency exchanges with automated trading strategies, real-time market analysis, and risk management features.',
      icon: Bot,
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'WebSocket API'],
      features: [
        'Real-time market data processing',
        'Automated trading algorithms',
        'Risk management system',
        'Performance analytics dashboard'
      ],
      githubUrl: '#',
      liveUrl: '#',
      gradient: 'from-primary to-secondary'
    },
    {
      id: 2,
      title: 'Metatron Atlas 3D Converter',
      description: 'A sophisticated 3D model conversion tool that transforms various 3D file formats with advanced geometry processing and optimization capabilities.',
      icon: Box,
      technologies: ['React', 'Three.js', 'Node.js', 'WebGL'],
      features: [
        '3D model format conversion',
        'Geometry optimization',
        'Real-time 3D preview',
        'Batch processing support'
      ],
      githubUrl: '#',
      liveUrl: '#',
      gradient: 'from-secondary to-primary'
    }
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that demonstrate my expertise in full-stack development and problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={project.id} className={`group hover-lift bg-surface-alt border-border overflow-hidden animate-slide-up`}
                  style={{animationDelay: `${index * 0.2}s`}}>
              <CardHeader className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center shadow-glow`}>
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-sm bg-accent rounded-full border border-border font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              
              <CardFooter className="flex space-x-3">
                <Button variant="outline" size="sm" className="flex-1 hover-glow transition-all duration-300">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button size="sm" className={`flex-1 bg-gradient-to-r ${project.gradient} hover:shadow-glow transition-all duration-300`}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover-glow transition-all duration-300">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;