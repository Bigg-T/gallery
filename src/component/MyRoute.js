/**
 * 
 */

import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../page/Home';
class MyRoute extends Component {
  render() {
    return (
        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </main>
    )
  }
}

export default MyRoute;
