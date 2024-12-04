import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import About from './About';
import Qualification from './QualificationPage/Qualification';
import Skills from './Skills';
import Project from './ProjectsPage/Project';
import Publication from './Publication';
import Footer from './Footer';
import CognizantPage from './QualificationPage/CognizantPage';
import SencholaPage from './QualificationPage/SencholaPage';
// import VelammalPage from './QualificationPage/VelammalPage';
// import AyyanarPage from './QualificationPage/AyyanarPage';
import InternpePage from './QualificationPage/InternpePage';
import RestaurantPage from './ProjectsPage/RestaurantPage'; 
import ChatApplicationPage from './ProjectsPage/ChatApplicationPage'; 
import WordPressPage from './ProjectsPage/WordPressPage'; 
import ECommercePage from './ProjectsPage/ECommercePage'; 
import EBillPage from './ProjectsPage/EBillPage'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Home page containing all the sections
function Home() {
  return (
    <>
      <section id="about"><About /></section>
      <section id="qualification"><Qualification /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Project /></section>
      <section id="publication"><Publication /></section>
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home route displaying all sections */}
        <Route path="/" element={<Home />} />

        {/* Other individual pages */}
        <Route path="/cognizant" element={<CognizantPage />} />
        <Route path="/senchola" element={<SencholaPage />} />
        {/* <Route path="/velammal" element={<VelammalPage />} />
        <Route path="/ayyanar" element={<AyyanarPage />} /> */}
        <Route path="/internpe" element={<InternpePage />} />
        <Route path="/Restaurant" element={<RestaurantPage />} />
        <Route path="/ChatApplication" element={<ChatApplicationPage />} />
        <Route path="/WordPress" element={<WordPressPage />} />
        <Route path="/ECommerce" element={<ECommercePage />} />
        <Route path="/EBill" element={<EBillPage />} />
      </Routes>
      <Footer /> {/* Persistent footer on all pages */}
    </Router>
  );
}

export default App;
