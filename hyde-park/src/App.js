import React from 'react';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import NewHere from './components/NewHere/NewHere';
import Sermons from './components/Sermons/Sermons';
import Give from './components/Give/Give';
import Events from './components/Events/Events';
import MainNav from './components/MainNav/MainNav';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <BrowserRouter>
          <MainNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/sermons" component={Sermons} />
            <Route path="/give" component={Give} />
            <Route path="/events" component={Events} />
            <Route path="/newhere" component={NewHere} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  );
}

export default App;
