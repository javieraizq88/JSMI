import React from 'react'
import './App.css';
import {  Route, BrowserRouter, Switch } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './components/home';
import Navbar from './components/navbar';
import Conoceme from './components/conoceme';
import Blog from './components/blog';
 
const App = props => {
 
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route exact path='/conoceme' component={Conoceme} /> 
          <Route exact path='/blog' component={Blog} /> 
        </Switch>
      </BrowserRouter>
    </>
  )
}
 
export default injectContext(App);
