import Navigation from '@/components/Navigation';
import { ExternalLink, Github, Bot, Box, Calendar, Code, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Nebula from './Nebula';

const Projects = () => {
  const projects = [
    {
      id: 2,
      title: 'Metatron Atlas 3D Converter',
      description: 'The 2D to 3D Model Converter is a powerful web-based tool built with React.js, Three.js, and Redux Toolkit that allows users to upload 2D images and generate interactive 3D models with mesh and texture outputs. Users can  download mesh files in formats like .obj, .glb, or .fbx and view Realtime 3D Pictures',
      icon: Box,
      category: '3D Graphics',
      status: 'InProgress',
      date: '2025',
      technologies: ['React', 'Three.js', 'Python', 'Django'],
      features: [
        '3D model format conversion',
        'Geometry optimization',
        'Real-time 3D preview',
        'Batch processing support',
        'Texture mapping',
        'Mesh analysis tools'
      ],
      challenges: [
        'Complex 3D mathematics',
        'Performance optimization for large models',
        'Cross-browser WebGL compatibility',
        'Memory management'
      ],
      githubUrl: '#',
      liveUrl: 'https://metatronatlas3dreact.osizdemos.com/login',
      gradient: 'from-secondary to-primary',
      bgColor: 'bg-secondary/5'
    },
    {
      id: 1,
      title: 'Osiz AI Sales Lead Generation Bot',
      description: 'An AI-powered sales lead generation chatbot designed to engage website visitors, capture leads, schedule demo calls, and assist customers in real time..',
      longDescription: 'The Osiz AI Sales Lead Generation Bot is built to connect with website users, answer queries instantly, and collect qualified leads for the sales team. It assists customers by providing product information, scheduling demo video calls, and guiding them through service offerings. Integrated with the Osiz website, the bot enhances customer engagement and improves lead conversion rates through intelligent conversation flows.',
      icon: Bot,
      category: 'Automation',
      status: 'Inprogress',
      date: '2025',
      technologies: ['React', 'Redux', 'Python', 'Django'],
      features: [
        'Real-time chat assistance',
        'AI-driven lead qualification',
        'Automated demo call scheduling',
        'Customer query handling',
        'Integration with Osiz website',
        'Lead storage & CRM handoff'
      ],
      challenges: [
    'Creating natural and context-aware AI responses',
    'Integrating video call scheduling system',
    'Ensuring smooth user experience across platforms',
    'Handling diverse customer queries'
      ],
      githubUrl: '#',
      liveUrl: 'https://aisaleslead.osizdemos.com/',
      gradient: 'from-primary to-secondary',
      bgColor: 'bg-primary/5'
    },
    
  ];

  const categories = ['All', 'Automation', '3D Graphics', 'Web Apps'];

  return (
     <div className="min-h-screen relative overflow-hidden">
     <Nebula/>
     <div className="relative z-10">
      <Navigation />
      
      {/* Hero Section */}
       <section className="pt-24 pb-16 bg-transparent">

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
               <span className="text-gradient">My Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Showcasing innovative solutions and technical expertise through practical applications
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      {/* <section className="py-8 bg-surface">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className="hover-glow transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects Grid */}
      <section className="py-2">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            {projects.map((project, index) => (
              <Card key={project.id} className={`group hover-lift bg-surface-alt border-border overflow-hidden animate-slide-up ${project.bgColor}`}
                    style={{animationDelay: `${index * 0.2}s`}}>
                <div className="md:flex">
                  {/* Project Header */}
                  <div className="md:w-1/3 p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center shadow-glow`}>
                          <project.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                          <h2 className="text-white font-bold">{project.title}</h2>
                        </div>
                      </div>
                      
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{project.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Code className="h-4 w-4" />
                          <span>{project.status}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex space-x-3">
                        {/* <Button variant="outline" size="sm" className="hover-glow transition-all duration-300">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button> */}
                        <a
  href={project.liveUrl}
  target="_blank"
  rel="noopener noreferrer"
>

                        <Button size="sm" className={`bg-gradient-to-r ${project.gradient} hover:shadow-glow transition-all duration-300`}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="md:w-2/3 p-8 border-l border-border">
                    <div className="space-y-8">
                      {/* Detailed Description */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                          <Globe className="h-5 w-5 text-primary" />
                          <span className='text-white'>Project Overview</span>
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.longDescription}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                          <Code className="h-5 w-5 text-primary" />
                          <span className='text-white'>Technologies Used</span>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 text-sm bg-accent rounded-full border border-border font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features and Challenges Grid */}
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Key Features */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                            <Database className="h-5 w-5 text-primary" />
                            <span className='text-white'>Key Features</span>
                          </h3>
                          <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technical Challenges */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                            <Bot className="h-5 w-5 text-primary" />
                            <span className='text-white'>Technical Challenges</span>
                          </h3>
                          <ul className="space-y-2">
                            {project.challenges.map((challenge, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-xl mb-8 opacity-90">
            I'm always excited to take on new challenges and create innovative solutions
          </p>
          <Button variant="secondary" size="lg" className="shadow-lg">
            Start a Project
          </Button>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Projects;