import React from 'react';
import './Certifications.css'; // Optional: Add custom styles

const certifications = [
  {
    title: 'React - The Complete Guide',
    provider: 'Udemy',
    link: 'https://www.udemy.com/course/react-the-complete-guide/',
  },
  {
    title: 'Introduction to Cybersecurity Awareness',
    provider: 'HP',
    link: 'https://www.life-global.org/course/346-introduction-to-cybersecurity-awareness',
  },
  {
    title: 'Python for Everybody',
    provider: 'Coursera',
    link: 'https://www.coursera.org/specializations/python',
  },
  {
    title: 'AWS Certified Solutions Architect',
    provider: 'AWS Training',
    link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    provider: 'Coursera',
    link: 'https://www.coursera.org/professional-certificates/google-data-analytics',
  },
  {
    title: 'Full-Stack Web Development with Node.js',
    provider: 'edX',
    link: 'https://www.edx.org/professional-certificate/full-stack-web-development',
  },
];

const Certifications = () => {
  return (
    <div className="certifications-container">
      <h1>📜 Popular Certification Courses</h1>
      <div className="certification-cards">
        {certifications.map((course, index) => (
          <a
            key={index}
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
          >
            <h2>{course.title}</h2>
            <p>{course.provider}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
