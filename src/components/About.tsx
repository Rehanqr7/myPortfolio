import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Trophy } from 'lucide-react';
import {
  SiGo,
  SiGraphql,
  SiNatsdotio,
  SiFlutter,
  SiReact,
  SiAndroid,
  SiApple,
  SiAmazon,
  SiDocker,
  SiGithubactions,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiApachemaven
} from 'react-icons/si';
import { FaNetworkWired ,FaWindows} from 'react-icons/fa';
import { DiJava } from 'react-icons/di';
export function About() {
  const icons = {
    Go: <SiGo className="h-6 w-6 text-sky-600" />,
    Java: <DiJava className="h-6 w-6 text-red-600" />,
    gRPC: <FaNetworkWired className="h-6 w-6 text-purple-600" />,
    GraphQL: <SiGraphql className="h-6 w-6 text-pink-600" />,
    NATS: <SiNatsdotio className="h-6 w-6 text-blue-600" />,
    Flutter: <SiFlutter className="h-6 w-6 text-cyan-600" />,
    React: <SiReact className="h-6 w-6 text-blue-500" />,
    Android: <SiAndroid className="h-6 w-6 text-green-600" />,
    Windows: <FaWindows className="h-6 w-6 text-blue-400" />,
    macOS: <SiApple className="h-6 w-6 text-gray-800" />,
    AWS: <SiAmazon className="h-6 w-6 text-orange-500" />,
    Nomad: <Cloud className="h-6 w-6 text-yellow-600" />, // no react-icon, use lucide icon
    Docker: <SiDocker className="h-6 w-6 text-blue-400" />,
    'CI/CD': <SiGithubactions className="h-6 w-6 text-violet-600" />,
    SQL: <SiPostgresql className="h-6 w-6 text-indigo-600" />,
    MongoDB: <SiMongodb className="h-6 w-6 text-green-500" />,
    Git: <SiGit className="h-6 w-6 text-red-500" />,
    Maven: <SiApachemaven className="h-6 w-6 text-red-600" />,
  };

  const skills: Record<string, (keyof typeof icons)[]> = {
    "Backend Development": ["Go", "Java", "gRPC", "GraphQL", "NATS"],
    "Frontend & Mobile": ["Flutter", "React", "Android", "Windows", "macOS"],
    "Cloud & DevOps": ["AWS", "Nomad", "Docker", "CI/CD"],
    "Databases & Tools": ["SQL", "MongoDB", "Git", "Maven"]
  };

  const achievements = [
    {
      title: "Semicolons 2024",
      description: "Won best use of Azure Open AI for building an app for notes, summary and sample test generation"
    },
    {
      title: "Semicolons 2023",
      description: "Built a code pipeline for vaccine development procedure"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 mb-6">
            Experienced Software Engineer with 3 years of expertise in backend development,
            specializing in Go, gRPC, GraphQL, and NATS. Skilled in designing scalable
            microservices, real-time data streaming, and system orchestration using
            Nomad and AWS.
          </p>
          <p className="text-gray-600 mb-6">
            Proficient in Flutter and ReactJS for frontend integration. Passionate
            about building high-performance, distributed systems and delivering
            innovative solutions in cross-functional teams.
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg"
                >
                  <Trophy className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">{achievement.title}</h4>
                    <p className="text-blue-700">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold">Skills & Technologies</h3>

          {Object.entries(skills).map(([category, technologies], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                {category === "Backend Development" && <Code2 className="h-6 w-6 text-blue-600 mr-2" />}
                {category === "Frontend & Mobile" && <Code2 className="h-6 w-6 text-green-600 mr-2" />}
                {category === "Cloud & DevOps" && <Cloud className="h-6 w-6 text-purple-600 mr-2" />}
                {category === "Databases & Tools" && <Database className="h-6 w-6 text-orange-600 mr-2" />}
                <h4 className="text-lg font-semibold">{category}</h4>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-1 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {icons[tech as keyof typeof icons]}
                    <span className="text-xs text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
