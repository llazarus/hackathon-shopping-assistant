import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import SunglassesPreview from './components/SunglassesPreview';

function App() {
  return (
    <Router>
     <Switch>
     <Route path="/try/sunglasses">
       <SunglassesPreview/>
     </Route>       
     <Route path="/">
       <Home/>
     </Route>
     </Switch>
    </Router>   
  );
}

export default App;
