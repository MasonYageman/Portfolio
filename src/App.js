
import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Resume from './components/resume/resume';
import Hero from './components/hero/hero';
import Projects from './components/projects/projects';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Resume></Resume>
      <Projects></Projects>
      <Contact></Contact>

    </div>
  );
}

export default App;
