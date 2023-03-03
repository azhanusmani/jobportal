import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import HomePage from './Pages/Homepage';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Pages/LoginPage';
import JobsListings from './Pages/JobsListings';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/jobs" element={<JobsListings />} />
      </Routes>
    </Container>
  );
}

export default App;
