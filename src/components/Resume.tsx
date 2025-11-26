import { Download, Eye, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Resume = () => {

  const personalInfo = {
    name: "Rajasekar.S",
    title: "MERN Stack Developer",
    email: "rajahulk@gmail.com",
    phone: "+91 8973517488",
    location: "Madurai, India",
    github: "https://github.com/Raja-666/",
    linkedin: "linkedin.com/in/rajasekar"
  };

  const skills = {
    frontend: ["React.js", "JavaScript", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "JWT Authentication"],
    tools: ["Git", "VS Code", "Postman", "npm/yarn", "Webpack",]
  };

  const experience = [
    {
      title: "MERN Stack Developer",
      company: "Osiz Technologies Pvt Ltd",
      period: "Jan 2024 - Present",
      responsibilities: [
        "Developed responsive web applications using React.js and Node.js",
        "Built RESTful APIs with Express.js and MongoDB integration",
        "Collaborated with cross-functional teams to deliver projects on time",
        "Optimized application performance and implemented best practices"
      ]
    },
    {
      title: "MERN Stack Intern",
      company: "Osiz Technologies Pvt Ltd",
      period: "Jul 2023 - Dec 2023",
      responsibilities: [
        "Created interactive user interfaces using React.js",
        "Implemented responsive designs with CSS3 and Tailwind CSS",
        "Collaborated with backend developers for API integration",
        "Participated in code reviews and agile development practices"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of - Computer Science",
      institution: "MS University",
      period: "2008 - 2011",
      Percentage: "72%"
    }
  ];

  const projects = [
    {
      name: "KoinPark AI bot",
      technologies: "React, Python, MongoDB, Express.js",
      description: "Full-stack e-commerce application with user authentication, product management, and payment integration"
    },
    {
      name: "Metatron Atlas 2D to 3D Image Converter",
      technologies: "React, python,",
      description: "Collaborative task management tool with real-time updates and team collaboration features"
    },
    {
      name: "Neuro NFT",
      technologies: "React, Nodejs, Express.js, MongoDB",
      description: "Weather forecasting application with interactive charts and location-based data"
    }
  ];

  const handleDownloadPDF = () => {
  const link = document.createElement('a');
  link.href = '/Rajasekar_Resume.pdf'; // Place your actual PDF file in the /public folder
  link.download = 'Rajasekar_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Actions */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gradient">Resume</h1>
          <div className="flex gap-3">
            
            <Button onClick={handleDownloadPDF} className="bg-gradient-primary hover:shadow-glow">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <Card className="bg-surface border-border shadow-glow">
          <CardContent className="p-8">
            {/* Personal Information */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
              <p className="text-xl text-primary mb-4">{personalInfo.title}</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  {personalInfo.email}
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  {personalInfo.phone}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {personalInfo.location}
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Github className="h-4 w-4" />
                  {personalInfo.github}
                </div>
                <div className="flex items-center gap-1">
                  <Linkedin className="h-4 w-4" />
                  {personalInfo.linkedin}
                </div>
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Professional Summary */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">Professional Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                Passionate MERN Stack Developer with 1.9 years of experience in building modern, 
                responsive web applications. Proficient in React.js, Node.js, Express.js, and MongoDB. 
                Strong problem-solving skills and commitment to writing clean, maintainable code. 
                Eager to contribute to innovative projects and continue learning new technologies.
              </p>
            </div>

            <Separator className="mb-8" />

            {/* Technical Skills */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-surface-alt rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-surface-alt rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-surface-alt rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Work Experience */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <p className="text-primary">{job.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-surface-alt px-3 py-1 rounded">
                        {job.period}
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-sm">{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Education */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              {education.map((edu, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-primary">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.grade}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-surface-alt px-3 py-1 rounded">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>

            <Separator className="mb-8" />

            {/* Projects */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <Card key={index} className="bg-surface-alt border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <p className="text-sm text-primary">{project.technologies}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;