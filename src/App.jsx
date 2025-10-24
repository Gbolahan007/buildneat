import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';
import AppLayout from './AppLayout';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />

          <Route path="/about-construction-company" element={<About />} />
          <Route path="/contact-construction-experts" element={<Contact />} />
          <Route path="/our-construction-projects" element={<Projects />} />
          <Route path="/construction-services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
