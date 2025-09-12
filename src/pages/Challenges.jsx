import { Link } from 'react-router-dom';

const firstYearChallenges = [
  "Personal Portfolio Website.",
  "Digital Clock and countdown timer.",
  "SRGI Clone.",
  "To-Do List App.",
  "Make a basic weather forecast app using a public API (like OpenWeather) styled with space elements.",
  "Voice Assistant(basic)",
];

const seniorYearChallenges = [
  "Personal Expense Tracker App",
  "AI-based Help bot for information retrieval out of a knowledge graph created based on static/dynamic content at a web portal.",
  "Developing an Algorithm for Air Quality Visualizer and Forecast App to generate granular, real-time, and predictive air quality information, especially in smaller cities or rural areas.",
  "Smart Resume Parser & Job Matcher.",
  "Real-Time Face Mask Detection & Alert System.",
  "Library Management System.",
  "Real-Time Collaborative Document Editor.",
  "Student Attendance Tracker.",
  "Smart Canteen Ordering App",
  "AI-Powered Resume Analyzer & Ranker",
];

export default function Challenges() {
  return (
    <section id="challenges" className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl font-bold mb-10 border-b border-blue-600 inline-block">Challenges</h2>

      {/* 1st Year Challenges */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-white mb-6">1st Year Challenges</h3>
        <div className="space-y-6">
          {firstYearChallenges.map((title, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-blue-400 font-semibold text-lg mb-1">Challenge {index + 1}</h4>
                  <p className="text-gray-300 text-sm">{title}</p>
                </div>
                <Link
                  to={`/challenge/${index}`}
                  className="text-blue-500 text-sm font-semibold hover:underline whitespace-nowrap"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2nd, 3rd, 4th Year Challenges */}
      <div>
        <h3 className="text-2xl font-semibold text-white mb-6">2nd, 3rd & 4th Year Challenges</h3>
        <div className="space-y-6">
          {seniorYearChallenges.map((title, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="pr-4">
                  <h4 className="text-blue-400 font-semibold text-lg mb-1">Challenge {index + 1}</h4>
                  <p className="text-gray-300 text-sm">{title}</p>
                </div>
                <Link
                  to={`/challenge/${index + firstYearChallenges.length}`}
                  className="text-blue-500 text-sm font-semibold hover:underline whitespace-nowrap"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
