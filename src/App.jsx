//src/App.jsx
import Header from './components/layout/Header.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Services from './components/sections/Services.jsx';
import Projects from './components/sections/Projects.jsx';
import Contact from './components/sections/Contact.jsx';
import Footer from './components/layout/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;