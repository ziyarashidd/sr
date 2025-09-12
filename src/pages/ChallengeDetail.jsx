import { useParams } from 'react-router-dom';

const challengeData = [
  {
    title: "Personal Portfolio Website.",
    description: `✅ Objective:

To design a simple personal webpage that introduces the student, showcasing basic web development skills.

🧰 Technologies Used:

HTML

CSS

📄 Description:

This project involves creating a personal portfolio website that contains your name, photo, bio, skills, hobbies, and contact details. It can be a single-page or multi-section layout. Students will practice how to structure content using HTML and style it using CSS.

✨ Features:

Home, About Me, Skills, and Contact sections

Responsive layout using Flexbox or Grid

Navigation bar

Stylish font and colors

📚 Learning Outcomes:

Understanding HTML structure (tags like div, section, nav, img, etc.)

CSS styling and layout techniques

Basic responsive design`,
  },
  {
    title: "Digital Clock and Countdown Timer",
    description: `✅ Objective:

To build a real-time digital clock and a countdown timer using basic JavaScript.

🧰 Technologies Used:

HTML

CSS

JavaScript

📄 Description:

This project shows the current time (hours, minutes, seconds) in digital format and includes a countdown timer where users can enter a time duration and see it count down to zero.

✨ Features:

Real-time clock that updates every second

Countdown input and timer display

Start/Reset button functionality

📚 Learning Outcomes:

JavaScript DOM manipulation

Using setInterval and clearInterval

Working with date and time in JavaScript`,
  },
  {
    title: "SRGI Clone.",
    description: `✅ Objective:

To recreate the homepage layout of the official SRGI website using HTML and CSS.

🧰 Technologies Used:

HTML

CSS

📄 Description:

This project challenges students to observe and replicate the design and layout of the SRGI college website. It includes basic sections like navigation bar, hero banner, about section, and footer. No functionality is required, only design.

✨ Features:

Static homepage design

Responsive navigation bar

Banner section with image or background color

Footer with contact/info links

📚 Learning Outcomes:

CSS layout techniques (Flexbox, Grid)

How to inspect and clone a web layout

Understanding UI/UX consistency`,
  },
  {
    title: "To-Do List App.",
    description: `✅ Objective:

To create a task management app where users can add, delete, and mark tasks as completed.

🧰 Technologies Used:

HTML

CSS

JavaScript

📄 Description:

The To-Do List is a simple web app where users can type in tasks and manage their daily activities. It demonstrates dynamic behavior using JavaScript, such as creating list items and toggling their status.

✨ Features:

Add a new task

Mark task as completed

Delete task

Task status update with styling

📚 Learning Outcomes:

DOM manipulation (creating, removing elements)

Event handling in JavaScript

Arrays or local storage (optional)`,
  },
  {
    title: "Make a basic weather forecast app using a public API (like OpenWeather) styled with space elements.",
    description: `✅ Objective:

To fetch and display real-time weather data using an open API.

🧰 Technologies Used:

HTML

CSS

JavaScript

OpenWeather API

📄 Description:

This project connects to the OpenWeather API and displays weather details for a given city. It demonstrates working with external APIs and JSON data. The app shows temperature, weather condition, and city name.

✨ Features:

Input field for city

Real-time weather info (temperature, status)

Weather icons (optional)

Error handling for invalid cities

📚 Learning Outcomes:

Fetching API data using fetch()

Parsing JSON responses

Working with forms and error handling

📘 General Submission Guidelines

Submit all files in a single folder (index.html, style.css, script.js)

Include a README file describing the project

Screenshots (optional but recommended)

Hosted version link (GitHub Pages or similar if applicable)`,
  },
  
  {
    title: "Personal Expense Tracker App",
     description: `Problem / Motivation

Many people have trouble keeping track of their expenditures, income, etc.

They want visualizations (weekly, monthly spend), categorization, alerts when overspending, maybe prediction.

Possible Features

Adding income/expense entries (date, category, amount, description)

Multiple expense categories (food, travel, rent, utilities …)

Budget setting per category / month

Visualizations: charts, trends, pie/donut charts of where money is going

Alerts or notifications when certain budget thresholds are crossed

Export data (CSV) or backup

Technical Stack (Possible Choices)

Frontend: Mobile (Android / iOS) or Web (React, Angular, Vue)

Backend: Node.js / Django / Flask / Spring Boot

Database: SQLite / MySQL / PostgreSQL / NoSQL (e.g. MongoDB)

Optional: local storage + offline mode

Optional ML / forecast: predict future expenses based on historical data

Related Work

Many apps exist (Mint, Money Manager, etc.). Academic studies analyze what features users prefer, UX.

Evaluation Metrics

Accuracy of categorization

UX metrics: ease of entering data, response times

Adoption / retention rate if real users used the app

Forecast error if prediction is included (e.g., mean absolute error).`,
  },
  {
    title: "AI-based Help bot for information retrieval out of a knowledge graph created based on static/dynamic content at a web portal.",
    description: `Overview
AI-based Help Bot for Information Retrieval from a Knowledge Graph Based on Static/Dynamic Web Portal Content
The MOSDAC (www.mosdac.gov.in) portal hosts satellite data and services accessible to the public. It includes extensive FAQs, documentation, product specifications, and support material. However, users often struggle to locate precise information due to layered navigation, mixed content formats, and time constraints. An AI-based help bot is envisioned to intelligently parse all hosted content and return instant, contextual responses to user queries, enhancing usability and knowledge accessibility across the platform.

Objective:
Develop an intelligent virtual assistant leveraging NLP/ML for query understanding and precise information retrieval.
Extract and model structured/unstructured content into a dynamic knowledge graph.
Support geospatial data intelligence for spatially-aware question answering.
Ensure contextual, relationship-based information discovery.
Ensure modularity for deployment across other web portals with similar architectures.
Expected Outcomes:
An AI-powered conversational help bot capable of resolving user queries accurately from the MOSDAC portal.
Knowledge graph architecture for entity/relationship mapping across the portal.
Dataset Required:
Static and dynamic web content including:
Product catalogues, FAQ sections, documentation (PDF, DOCX, XLSX, etc.)
Meta tags, tables, web pages, and accessibility tags (ARIA-labels)
Satellite mission details, product types, and scientific articles
Suggested Tools/Technologies:
Python, NVIDIA RAG, LLMs, spaCy, NLTK
Dialogflow, Rasa, LangChain, Node.js
Expected Solution / Steps to be followed to achieve the objectives:
Data Ingestion: Crawl and extract structured/unstructured content from MOSDAC.
Knowledge Graph Creation: Entity and relationship extraction using NLP techniques.
Model Selection: Choose or fine-tune a model for semantic understanding and conversational context.
Training: Train the model using FAQs, documents, and user intent classification.
UI/UX Layer: Build a front-end chatbot interface using frameworks like React or Streamlit.
Integration: Deploy backend services and integrate LLM or retrieval-augmented generation module for real-time querying.
Modularization: Package with scalable architecture for deployment on alternate domains.
Evaluation Parameters:
Intent Recognition Accuracy: How accurately user queries are interpreted.
Entity Recognition Accuracy: Precision of keyword/topic extraction.
Response Completeness: Coverage of answer relative to query context.
Response Consistency: Logical consistency across multi-turn conversations.`,
  },
  {
    title: "Developing an Algorithm for Air Quality Visualizer and Forecast App to generate granular, real-time, and predictive air quality information, especially in smaller cities or rural areas.",
    description: `Overview
Developing an Algorithm for Air Quality Visualizer and Forecast App to Generate Granular, Real-time, and Predictive Air Quality Information
An intuitive air quality visualizer and forecasting tool designed to bridge the data gap for underserved regions. While most AQI (Air Quality Index) apps focus on large metropolitan areas, this idea aims to develop an application that delivers hyperlocal, real-time, and predictive air quality insights—even in small towns and rural areas.

Objective:
Display real-time AQI from both ground stations and satellite sources.
Visualize historical AQI trends with location filters.
Integrate meteorological data to forecast air quality 24–72 hours ahead.
Provide health recommendations based on pollution levels.
(Optional) Map pollution sources (e.g., traffic, factories, crop burning).
Expected Outcomes:
Real-Time, Location-Based AQI Updates.
Personalized Health Alerts & Recommendations.
Predictive AQI Forecasting.
Interactive AQI HeatMaps.
Push Alerts for certain threshold.
Dataset Required:
AQI Dataset from IMD/CPCB/ISRO.
Suggested Tools/Technologies:
UI and Frameworks: Flutter, React
Backend Architecture: Supabase DB, Firebase Notifications, Node.js + Express, Python
API and Data: Bhuvan Maps / Google Maps API, Satellite/CPCB data for AQI
Forecasting: TensorFlowLite, Hugging Face predictive models API
Testing: Jest
Analytics: Firebase Analytics, Google Analytics
Expected Solution / Steps to be followed to achieve the objectives:
AQI Map: Select a city or pin your location. Pull latest AQI from CPCB and visualize satellite-derived pollution. Use color-coded zones (Green = Good, Red = Hazardous).
Historical Trends: Graph AQI/PM2.5/NO₂ over weeks or months. Show satellite images over time for visual correlation.
Forecasting (Optional): Use weather + historical AQI to train a model to predict next 3 days’ pollution level. Show forecast as line chart or animated map.
Health & Advisory Dashboard: Display actionable suggestions: 'Wear a mask', 'Avoid jogging', 'Use air purifier'. Use AQI breakpoints from WHO or Indian standards.
Advanced Ideas for Bonus Points:
Add push notifications for pollution spikes.
Show pollution source heatmaps using vehicle density and industrial zones.
Offer API for developers or cities to integrate into other systems.
Link to emergency response tools for high AQI alerts in schools or hospitals.`,
  },
  {
    title: "Smart Resume Parser & Job Matcher.",
    description: `Problem / Motivation

For job seekers and recruiters, matching job descriptions with candidate resumes is time consuming. Automating parsing and matching helps.

Possible Features

Resume parsing: extracting name, education, experience, skills

Job description parsing similarly

Matching: compute similarity between resume & job description; highlight missing skills

Ranking candidates; interface for recruiters

Technical Stack

NLP: PDF/DOCX parsing (e.g., pdfplumber, docx2txt), Named Entity Recognition for sections

Embeddings: TF‑IDF, Word2Vec, BERT / Sentence Transformers

Similarity metric: cosine similarity, maybe more advanced ML

UI for upload, matching, dashboards

Related Work / References

Projects / tools: “AI powered resume parser & job matcher using NLP & ML” 
GitHub

“Intelligent Resume Matching System” using BERT‑based sentence transformers to create embeddings and comparing using cosine similarity. 
IJRASET

Evaluation Metrics

Precision/Recall of parsing (are all relevant sections extracted correctly)

Accuracy of matching (do top matched jobs actually fit)

Human evaluation: recruiter satisfaction

Speed / latency.`,
  },
  {
    title: "Real-Time Face Mask Detection & Alert System.",
    description: `Problem / Motivation

In pandemics, mask wearing is important. A system that can detect whether people are wearing masks (and properly) can help enforcement / safety.

Possible Features

Real‑time video input (webcam or CCTV)

Detect “mask”, “no mask”, “mask but worn improperly”

Alerts when violation is detected

Perhaps generate reports over time (number of violations, hot zones)

Technical Stack

Computer Vision: face detection (e.g. SSD, YOLO, Haar cascades), classification models (CNNs)

Data: datasets of images with/without masks

Edge / real‑time processing: using lightweight models like MobileNetV2 
journal-isi.org
+2
arXiv
+2

Frontend: dashboard, alerts

Related Work / References

“RRFMDS: Rapid Real‑Time Face Mask Detection System” – uses single‑shot multibox detector + MobileNetV2; custom dataset; high accuracy. 
PubMed

“Face Mask Detection and Alert System Using Artificial Intelligence for Covid‑19 Prevention” (Springer) 
SpringerLink

“Real‑Time Mask Detection Based on SSD‑MobileNetV2” 
arXiv

Evaluation Metrics

Accuracy, Precision, Recall, F1 for mask/no mask/improper mask classes

Frames per second (throughput), latency

False positives / false negatives

Robustness under different lighting, occlusion, angles.`,
  },
  {
    title: "Library Management System.",
    description: `Problem / Motivation

Traditional libraries (school / college) need systems to manage book inventory, issue/return, user tracking, fines etc.

Possible Features

Admin: add/remove books, manage book metadata (title, author, ISBN, copies)

Users: search catalog, request book, renew, return

Alerts for overdue books, fines calculation

Reports: most popular books, usage stats

Technical Stack

Relational database (MySQL, PostgreSQL)

Backend (Java, Python, PHP etc.)

Frontend/Web UI; possibly mobile app for users

Related Work

Many open source LMS (Library Management Systems) exist; standard architecture; could add enhancements such as barcode/RFID, mobile scanning

Evaluation Metrics

Correctness of transactions, throughput

Ease of use, UI/UX

Report accuracy.`,
  },
   {
    title: "Real-Time Collaborative Document Editor.",
    description: `Problem / Motivation

Documents (text or code) edited by multiple users simultaneously require real‑time synchronization, conflict resolution.

Possible Features

Multiuser editing (like Google Docs)

Operational Transformation (OT) or Conflict‑free Replicated Data Types (CRDT) for sync

Version history, comment/chat

Technical Stack

WebSockets for real‑time communication

Backend: Node.js, or something with event streaming

Data store: maybe in‑memory + persistent DB

Handling concurrency, merging edits

Related Work

Google Docs / collaborative tools; research on OT and CRDTs

Evaluation Metrics

Latency of updates across users

Consistency (no data loss or conflicts)

Scalability with number of concurrent users`,
  },
   {
    title: "Student Attendance Tracker.",
    description: `Problem / Motivation

In educational institutions, tracking student attendance manually is time‑consuming and error‑prone.

Possible Features

Manual entry by teachers or automated via biometric / RFID / face recognition

Reports, notifications to absentees or guardians

Dashboard per class / subject

Technical Stack

RFID / face recognition or manual + web app

Database for storing records

Mobile or web UI

Related Work

Systems using face recognition for attendance; apps for daily attendance

Evaluation Metrics

Accuracy of attendance marking

Reliability, resistance to fraud

Ease of use`,
  },
   {
    title: "Smart Canteen Ordering App",
    description: `Problem / Motivation

At large canteens (college, workplace), ordering gets messy; waiting times high; ordering inefficiencies.

Possible Features

Menu, placing orders in advance

Different pickup slots, or delivery within campus

Payment integration

Order status tracking

Technical Stack

Mobile app or web frontend

Backend for orders, inventory, scheduling

Integration with payment gateways

Related Work

Many food delivery / ordering systems; but college canteen context may have specific constraints

Evaluation Metrics

Order fulfillment time

Number of cancellations / wrong orders

User satisfaction.`,
  },
   {
    title: "AI-Powered Resume Analyzer & Ranker",
    description: `This is similar to #2.4 but more focused on “analysis & ranking” perhaps for many resumes rather than matching one.

Possible Features

Score resumes based on skills, experience, education, maybe even soft skills inferred

Rank candidates vs multiple applicants for given job specs

Feedback: where resume is weak

Technical Stack

Similar to job matcher + maybe ML models trained on past hiring data

Could add classifier / regressor that estimates “good fit”

Related Work

Same as resume parser / matcher work cited above

Evaluation Metrics

How well ranking matches human decision

Fairness, bias

Feedback usefulness.`,
  },

  // Add more descriptions here matching their index
];

export default function ChallengeDetail() {
  const { id } = useParams();
  const challenge = challengeData[parseInt(id)];

  if (!challenge) {
    return <div className="p-6 text-white text-center">Challenge not found.</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6">{challenge.title}</h1>
      <p className="text-gray-300 leading-relaxed text-base sm:text-lg whitespace-pre-line">
        {challenge.description}
      </p>
    </div>
  );
}
