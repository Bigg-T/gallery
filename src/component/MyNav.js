/**
 * The Nav bar for the site.
 */

import React, {Component} from 'react';
import {Menu, Search, Header, Container} from 'semantic-ui-react';
import {Route, Redirect} from 'react-router-dom';

class MyNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      results: [],
      value: '',
      redirect: ''
    }
  }

  resetComponent() {
    this.setState({ isLoading: false, results: [], value: '', redirect: '' });
  }

  /**
   * Trigger when user start typing in the search bar. Logging User serach.
   *
   * @param e the event
   * @param value the string user is typing
   */
  handleSearchChange(e, {value}) {
    this.setState({ isLoading: true, value});
    setTimeout(() => {
      if (this.state.value.length < 1) this.resetComponent();
      this.setState({
        isLoading: false,
      });
    }, 500);
  }

  handleEnter(key) {
    if (key === 'Enter') {
      let route = (
          <Route path="/" render={() => (
              <Redirect strict to={{
                pathname: '/search/'+this.state.value,
                search: '?keyword=' + this.state.value,
                state: {referrer: this.state.value}
              }}/>
          )}/>
      );
      window.location.reload(); //not the best way to reload DOM
      this.setState({redirect : route});
    }
  }

  render() {
    return (
        <Container>
          {this.state.redirect}
          <Menu>
            <Menu.Item header>
              <Header href="/">Gallery</Header>
            </Menu.Item>
            <Menu.Menu position="right">
              <Search
                onKeyPress={(event) => this.handleEnter(event.key)}
                onSearchChange={(e, {value}) => this.handleSearchChange(e, {value})}
              />
            </Menu.Menu>
          </Menu>
        </Container>
    );
  }
}

export default MyNav;