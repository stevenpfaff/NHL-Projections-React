import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Divisions from './components/Home/Divisions';


function App() {
  return (
    <div>
        <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/Divisions" exact component={Divisions} />
    </div>
  )
}


export default App;