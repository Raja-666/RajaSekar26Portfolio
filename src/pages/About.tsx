import React from "react";
import Navigation from "@/components/Navigation";
import { Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import MountBackground from "@/pages/RobotBackground";
import ThreeBackground from "@/pages/RobotBackground";

const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 90 },
  { name: "Express.js", level: 90 },
  { name: "MongoDB", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "HTML", level: 85 },
  { name: "CSS", level: 90 },
  { name: "THREEjs", level: 70 }
];

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0f172a]">

      {/* THREE.JS BACKGROUND */}
      <ThreeBackground/>

      {/* CONTENT */}
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-1">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                About <span className="text-gradient">Me</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                MERN Stack Developer passionate about building modern, responsive, and scalable web applications.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              My <span className="text-gradient">Skills</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:scale-[1.02] transition">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-white">{skill.name}</h3>
                        <motion.span
                          className="text-sm font-medium text-purple-300"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.15 + 0.5 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      >
                        <Progress value={skill.level} className="h-3 rounded-lg" />
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              My <span className="text-gradient">Journey</span>
            </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:scale-[1.02] transition">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Calendar className="h-5 w-5 text-purple-300" />
                  <span>Experience</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-3">
                  <li>
                    <strong className="text-white">MERN Stack Developer</strong> – Since Jan 2024
                  </li>
                  <li>
                    <strong className="text-white">Intern – MERN Stack</strong> @ Osiz Technologies (Jul 2023 – Dec 2023)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:scale-[1.02] transition">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Award className="h-5 w-5 text-purple-300" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-3">
                  <li>Built multiple full-stack applications using MERN</li>
                  <li>Optimized performance with scalable backend solutions</li>
                  <li>Contributed to open-source projects</li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
      </div>

    </div>
  );
};

export default About;
