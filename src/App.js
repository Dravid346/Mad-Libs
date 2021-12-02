import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Input from './pages/input';
import HomePage from './pages/homepage';
import Output from './pages/output';
import templates from './data/templates';

let index = Math.floor(Math.random()*templates.length);

let template = templates[index];

function App() {
  
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Route path="/" exact> <HomePage /> </Route>
          <Route path="/Input"> <Input template={template} index={index}/> </Route>
          <Route path="/Output"> <Output templates={templates}/> </Route>
        </header>
      </Router>
    </div>
  );
}

export default App;
