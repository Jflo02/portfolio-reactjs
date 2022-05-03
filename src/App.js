import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Project from './pages/Project';
import Cv from './components/Cv';
import Certifications from './pages/Certifications';
import Certification from './pages/Certification';

export default function App() {
  return (
    <>
      <Router>
        <SimpleReactLightbox>
          <NavMenu />
          <Switch>
            <Route path="/project" component={Project} />
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/certification" component={Certification} />
            <Route path="/certifications">
              <Certifications />
            </Route>
            <Route path="/skill" component={Skill} />
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/cv">
              <Cv />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </SimpleReactLightbox>
      </Router>
    </>
  );
}
