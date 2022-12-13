import React, { createRef, Fragment } from "react";
import LandingPage from "./LandingPage.js"
// import Project from './Project'
import Route from './Route.js'

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
