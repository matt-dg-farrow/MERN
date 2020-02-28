import React from 'react';
import './App.css';
import Search from './movie/Search'
import Movie from './movie/Movie'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Search}></Route>
        <Route path='/movie/:id' component={Movie}></Route>
      </Router>
      
    </div>
  );
}

export default App;
