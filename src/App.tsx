import './App.css';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
// import Container from './Comps/Container';
// import CardMenu from './CardMenu';
// import EmailSignIn from './Comps/EmailSignIn';
import MHome from './Pages/MHome';
import FeaturesPage from './Pages/FeaturesPage';
import Navbar from './Comps/Navbar';
import Pricing from './Pages/Pricing';
import BlogResourcesPage from './Pages/BlogResourcePage';
import SupportPage from './Pages/SupportPage';
import ContactPage from './Pages/ContactPage';
import Footer from './Comps/Footer';

function App() {
  return (
    <><Router>
    <div className='bg-zinc-900'>
      <Navbar />
      <Routes>
        <Route path="/"  element={<MHome/>} />
        <Route path="/features" element={<FeaturesPage/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/blog" element={<BlogResourcesPage/>} />
        <Route path="/support" element={<SupportPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      <Footer />
    </div>
  </Router></>
  );
}

export default App;
