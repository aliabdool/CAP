
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Members from './pages/Members';
import MemberProfile from './pages/MemberProfile';
import Community from './pages/Community';
import Marketplace from './pages/Marketplace';
import ServicesHub from './pages/ServicesHub';
import ProjectProfile from './pages/ProjectProfile';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-sand-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesHub />} />
            <Route path="/members" element={<Members />} />
            <Route path="/members/:id" element={<MemberProfile />} />
            <Route path="/projects/:id" element={<ProjectProfile />} />
            <Route path="/community" element={<Community />} />
            <Route path="/marketplace" element={<Marketplace />} />
            {/* Placeholder for Join page */}
            <Route path="/join" element={<div className="p-20 text-center font-bold text-2xl text-teal-800">Join Flow Placeholder</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
