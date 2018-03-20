/**
 * Routing to different part of the Web-Application.
 */

import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../page/Home';
import SearchResult from '../page/SearchResult';

class MyRoute extends Component {
  render() {
    return (
        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/search" component={SearchResult}/>
          </Switch>
        </main>
    )
  }
}

export default MyRoute;
