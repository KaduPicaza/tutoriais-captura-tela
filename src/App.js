import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WindowsPage from './pages/WindowsPage';
import IOSPage from './pages/IOSPage';
import AndroidPage from './pages/AndroidPage';
import GoogleClassroomPage from './pages/GoogleClassroomPage';

// Placeholder para Navbar e Footer, podem ser criados depois
const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Tutoriais de Captura de Tela</Link>
      <div>
        <Link to="/windows" className="px-3 hover:text-gray-300">Windows</Link>
        <Link to="/ios" className="px-3 hover:text-gray-300">iOS</Link>
        <Link to="/android" className="px-3 hover:text-gray-300">Android</Link>
        <Link to="/google-classroom" className="px-3 hover:text-gray-300">Google Classroom</Link>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-700 text-white text-center p-4 mt-8">
    <p>&copy; 2025 Manus - Tutoriais de Captura de Tela. Todos os direitos reservados.</p>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/windows" element={<WindowsPage />} />
            <Route path="/ios" element={<IOSPage />} />
            <Route path="/android" element={<AndroidPage />} />
            <Route path="/google-classroom" element={<GoogleClassroomPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
