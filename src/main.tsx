import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './App/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './App/NotFound';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />        
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
