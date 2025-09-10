import { Link } from 'react-router-dom';

const challengeList = [
  "Simulation/Modelling of Forest Fire Spread using AI/ML techniques",
  "AI-based Help bot for information retrieval out of a knowledge graph created based on static/dynamic content at a web portal.",
  "Monitoring Air Pollution from Space using Satellite Observations, Ground-Based Measurements, Reanalysis Data, and AI/ML Techniques",
  "Designing a chain of thought based LLM system for solving complex spatial analysis tasks through intelligent geoprocessing orchestration.",
  "Chase the Cloud: Leveraging Diffusion Models for Cloud Motion Prediction using INSAT-3DR/3DS Imagery.",
  "AI/ML-driven automated feature detection and change analysis of glacial lakes, road networks, and urban drainage systems from multi-source satellite imagery.",
  "Developing an Algorithm for Air Quality Visualizer and Forecast App to generate granular, real-time, and predictive air quality information, especially in smaller cities or rural areas.",
  "Novel Approaches for Optimizing Deep Learning in Earth Observation with Imbalanced Data.",
  "Developing an AI/ML-based algorithm for identifying tropical cloud clusters using half-hourly satellite data from the INSAT.",
  "Identifying halo CME events based on particle data from SWIS-ASPEX payload onboard Aditya-L1",
  "Novel method to detect landslides & boulders on the Moon: Using Chandrayaan images",
  "Dual image super resolution for high-resolution optical satellite imagery and its Blind Evaluation",
  "Generation of High-resolution Lunar Digital Elevation Model from Lunar Images using Photoclinometry (Shape from Shading).",
  "Robust Change Detection, Monitoring, and Alert System on user-defined AOI using Multi-Temporal LISS-4 Satellite Imagery.",
];

export default function Challenges() {
  return (
    <section id="challenges" className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl font-bold mb-8 border-b border-blue-600 inline-block">Challenges</h2>

      <div className="space-y-6">
        {challengeList.map((title, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div className="pr-4">
                <h3 className="text-blue-400 font-semibold text-lg mb-1">Challenge {index + 1}</h3>
                <p className="text-gray-300 text-sm">{title}</p>
              </div>

              <a
                href={`/challenge/${index}`}
                // target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm font-semibold hover:underline whitespace-nowrap"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
