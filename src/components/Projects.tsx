import { motion } from 'framer-motion';
import {  Server } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "IDA Offshore",
      date: "01/2025 - Present",
      description: "Backend-for-Frontend service with GraphQL integration and real-time data streaming",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      details: [
        "Designed and developed a Backend-for-Frontend (BFF) service with GraphQL",
        "Integrated with Instrument Service using gRPC for real-time data",
        "Implemented NATS for efficient data storage and real-time updates",
        "Built direct control functionality for bidirectional communication"
      ],
      technologies: ["Go", "GraphQL", "gRPC", "NATS"],
      github: "https://github.com/yourusername/ida-offshore"
    },
    {
      title: "JAMUN AES",
      date: "07/2024 - 01/2025",
      description: "Report Service for ICP-OES desktop application with NATS integration",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      details: [
        "Developed Report Service in Go for ICP-OES desktop application",
        "Integrated NATS messaging for report generation requests",
        "Implemented gRPC layer for .NET SDK consumption",
        "Deployed using Nomad for efficient orchestration"
      ],
      technologies: ["Go", "NATS", "gRPC", "Nomad", ".NET"],
      github: "https://github.com/yourusername/jamun-aes"
    },
    {
      title: "CISCO:CX DKIT",
      date: "09/2022 - 06/2024",
      description: "Learning application development and support platform",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      details: [
        "Resolved software bugs in Go-based learning application",
        "Migrated eReader from Cordova to Flutter",
        "Contributed to EST mobile application development",
        "Added observability library from ciscoU"
      ],
      technologies: ["Go", "Flutter", "Cordova", "Mobile Development"],
      github: "https://github.com/yourusername/cisco-cx-dkit"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{project.date}</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <a
                    href={project.github}
                    className="text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   
                  </a>
                </div>
                
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <Server className="h-5 w-5 mr-2 mt-1 text-blue-500" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}