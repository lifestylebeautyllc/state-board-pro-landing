import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

export default function App() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<BlogList />} />
            <Route path="blog/:slug" element={<BlogPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
