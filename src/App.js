import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Input from './pages/input';
import HomePage from './pages/homepage';
import Output from './pages/output';
import templates from './data/templates';

let template = templates[0]

function App() {
  
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/Input">
            <Input template={template}/>
          </Route>
          <Route path="/Output">
            <Output template={template}/>
          </Route>
        </header>
      </Router>
    </div>
  );
}

export default App;
