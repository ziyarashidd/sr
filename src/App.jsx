import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Challenges from './pages/Challenges';
import ChallengeDetail from './pages/ChallengeDetail';
import Hackathon from './pages/Hackathon';
import Whatsapp from './pages/Whatsapp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hackathon />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenge/:id" element={<ChallengeDetail />} />
        <Route path="/whatsapp" element={<Whatsapp />} />
      </Routes>
    </Router>
  );
}

export default App;
