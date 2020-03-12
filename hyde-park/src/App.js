import React from 'react';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Sermons from './components/Sermons/Sermons';
import Give from './components/Give/Give';
import Events from './components/Events/Events';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/sermons" component={Sermons}/>
          <Route path="/give" component={Give}/>
          <Route path="/events" component={Events}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
