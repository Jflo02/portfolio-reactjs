import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ExcelBtsSheet from './components/ExcelBtsSheet';
import Project from './pages/Project';
import Cv from './components/Cv';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/project" component={Project} />
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/skillssheet">
            <ExcelBtsSheet />
          </Route>
          <Route path="/cv">
            <Cv />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
