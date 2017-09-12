import React, { Component } from 'react';
import Semantic from './Semantic';
import Material from './Material';
import Bootstrap from './Bootstrap';
import Custom from './Custom';
import TodoWrapper from './TodoWrapper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const SemanticPage = () => (
  <TodoWrapper ui={Semantic} />
)

const BootstrapPage = () => (
  <TodoWrapper ui={Bootstrap} />
)

const MaterialPage = () => (
  <TodoWrapper ui={Material} />
)

const CustomPage = () => (
  <TodoWrapper ui={Custom} />
)

const Routing = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomeLinks} />
      <Route path="/semantic" component={SemanticPage}/>
      <Route path="/material" component={MaterialPage}/>
      <Route path="/bootstrap" component={BootstrapPage}/>
      <Route path="/custom" component={CustomPage}/>


    </div>
  </Router>
);

const HomeLinks = () => (
  <ul>
    <li><Link to="/semantic">Semantic</Link></li>
    <li><Link to="/material">Material</Link></li>
    <li><Link to="/bootstrap">Bootstrap</Link></li>
  </ul>
);



class App extends Component {

  render = () => {

    return (
      <MuiThemeProvider className="App">
          <Routing />
      </MuiThemeProvider>
    );
  }
}

export default App;
