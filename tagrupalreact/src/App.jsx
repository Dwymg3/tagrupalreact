import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './organisms/Header';
import Footer from './organisms/Footer';
import TaskManager from './organisms/taskManager'; 
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<TaskManager />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
