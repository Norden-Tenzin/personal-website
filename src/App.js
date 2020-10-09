import React from "react";
import logo from "./logo.svg";
import _ from 'lodash'
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import {Grid, Image} from 'semantic-ui-react'

const columns = _.times(16, (i) => (
  <Grid.Column key={i}>
    <Image src='/images/wireframe/image.png' />
  </Grid.Column>
))
const GridExampleGrid = () => <Grid>{columns}</Grid>


function App() {
  return (
    <div >
      <Grid stretched>
        {columns}
      </Grid>
    </div>
  );
}

export default App;
