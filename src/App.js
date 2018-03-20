import React, { Component } from 'react';
import {Grid, Container} from 'semantic-ui-react';

import MyRoute from './component/MyRoute';

class App extends Component {
  render() {
    return (
      <div>
        <Grid padded>
          <Grid.Row>
            <Container>
              <MyRoute />
            </Container>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
