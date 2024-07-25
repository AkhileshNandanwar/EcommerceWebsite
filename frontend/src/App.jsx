// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EcommercePage from './pages/EcommercePage';
import Footer from './components/layout/Footer'; // Import Footer component
import Navbar from './components/layout/Navbar';
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Contact } from './pages/Contact';
import Blogs from './components/blog/Blogs';
import BlogDetail from './components/blog/BlogDetail';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogId" element={<BlogDetail />} />
          <Route exact path="/ecommercepage" element={<EcommercePage />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
