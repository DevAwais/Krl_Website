import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Switch, BrowserRouter, Route } from 'react-router-dom';

//Components//
import About from './Components/About/about';
import Services from './Components/ServicesPage/servicesPage';
import Home from './Components/Home/home';
import Blog from './Components/Blog/blogMain';
import BlogDetail from './Components/Blog/BlogDetails/blogDetails';
import Project from './Components/Projects/projects';
import Contact from './Components/ContactPage/contact';
import ProjectDetails from './Components/ProjectDetails/projectDetailsMain';
import Splash from './Components/SplashScreen/splashScreen';
import FourZeroFour from './Components/404page/404';
import './App.css';


class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SplashScreen: Splash,
    }
  }

  componentDidMount() {
    setTimeout(function () {
      this.setState({ SplashScreen: Home });
    }.bind(this), 4500);
  }

  render() {
    const { SplashScreen  } = this.state
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SplashScreen} />
            {/* <Route path='*' component={FourZeroFour} /> */}
            <Route path="/about" component={About} />
            <Route path="/blog Detail" component={BlogDetail} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/projects" component={Project} />
            <Route path="/project" component={ProjectDetails} />
            <Route path="/services" component={Services} />
            <Route path="*" component={FourZeroFour} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
