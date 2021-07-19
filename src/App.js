import React, { createRef, Fragment } from "react";
import LandingPage from './LandingPage'
import Project from './Project'
import Route from './Route'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Route path='/'>
          <LandingPage/>
        </Route>
      </div>
    );
  }
}
