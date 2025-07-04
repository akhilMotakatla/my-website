import React from 'react';

const experiences = [
  {
    role: 'Graduate Teaching Fellow',
    company: 'University of North Texas',
    duration: 'Aug 2023 – May 2025',
    points: [
      'Instructed students in Linux administration, networking, and shell scripting to lay foundational DevOps and production support skills.',
      'Delivered modules on containerization (Docker) and hypervisors, aligning with modern scalable deployment standards.',
      'Taught version control (Git) and Agile-based team collaboration, supporting real-world CI/CD workflows.',
      'Emphasized secure coding, PKI encryption, and API security—key for production readiness and compliance.',
      'Guided use of Visual Studio/VS Code for profiling, debugging, and testing .NET apps in local and cloud environments.',
      'Led projects on DevOps automation, SRE principles, and shift-left practices to reduce incidents and boost deployment velocity.',
      'Covered SQL, ETL, and data analysis, aligning student capabilities with operational data handling and analytics workflows.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Deloitte',
    duration: 'Apr 2022 – Aug 2023',
    points: [
      'Coordinated Agile Scrum teams as a .NET Developer, leading daily stand-ups, sprint planning, backlog refinement, and retrospectives.',
      'Architected, built, and deployed microservices using .NET Core and ASP.NET Core Web API.',
      'Developed asynchronous endpoints, crafted RESTful APIs, and applied JSON Schema validation.',
      'Built Angular 18 SPAs, managed SQL Server and Azure App Services, and led legacy system upgrades.',
      'Implemented Kafka Streams, CI/CD with Azure DevOps, and secure auth with OAuth2.',
    ],
  },
  // Add more entries as needed...
];

const Experience = () => {
  return (
    <section id="experience" data-aos="fade-up">
      <h2>Experience</h2>
      {experiences.map(({ role, company, duration, points }, idx) => (
        <div key={idx}>
          <h3>{role} <span style={{ fontWeight: 'normal' }}>@ {company}</span></h3>
          <p><em>{duration}</em></p>
          <ul>
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
