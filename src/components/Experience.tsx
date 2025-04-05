import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap } from 'lucide-react';


export function Experience() {
  
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Persistent System Ltd",
      date: "06/2024 - Present",
      description: [
        "Designed and developed a Backend-for-frontend service using GraphQL, integrating with instrument Service via gRPC for Real-time and on demand data.",
        "Leveraged NATS for efficient data storage and real-time updates, enabling GraphQL subscriptions and direct control functionality.",
        "Built a report service for ICP-OES application and exposed it with gRPC endpoints."
      ],
      technologies: ["Go", "GraphQL", "gRPC", "NATS", "AWS"]
    },
    {
      title: "Software Developer",
      company: "Persistent System Ltd",
      date: "06/2022 - 06/2024",
      description: [
        "Served as a backend developer on client projects utilizing GoLang, contributing to the development of robust and scalable backend systems.",
        "Leveraged Flutter to develop Android, Windows, and Mac applications.",
        "Played a key role in the development lifecycle, from conceptualization to deployment."
      ],
      technologies: ["Go", "Flutter", "Android", "Windows", "macOS"]
    },
    {
      title: "Intern",
      company: "Persistent System Ltd",
      date: "12/2021 - 06/2022",
      description: [
        "Completed Java and Maven training modules during internship.",
        "Engaged in AWS Practitioner training, acquiring skills in cloud computing fundamentals."
      ],
      technologies: ["Java", "Maven", "AWS"]
    },
    {
      title: "B.Tech in Information Technology",
      company: "Vishwakarma Institute of Information Technology, Pune",
      date: "06/2018 - 07/2022",
      description: [
        "Specialized in Information Technology",
        "Participated in various hackathons and technical competitions"
      ],
      isEducation: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Experience & Education</h2>
      
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className={exp.isEducation ? "vertical-timeline-element--education" : "vertical-timeline-element--work"}
            contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
            date={exp.date}
            iconStyle={{ background: exp.isEducation ? 'rgb(16, 204, 82)' : 'rgb(33, 150, 243)', color: '#fff' }}
            icon={exp.isEducation ? <GraduationCap /> : <Briefcase />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              {exp.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-blue-600 mt-2">
              {exp.company}
            </h4>
            <div className="text-gray-600 mt-4">
              {Array.isArray(exp.description) ? (
                <ul className="list-disc pl-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{exp.description}</p>
              )}
            </div>
            {exp.technologies && (
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}