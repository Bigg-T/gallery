/**
 * ImageCard for display image with username.
 */

import React, {Component} from 'react';
import {Card, Image} from 'semantic-ui-react';

class ImageCard extends Component {
  render() {
    return (
        <Card>
          <Image src={this.props.src} size="medium"/>
          <Card.Content>
            <Card.Header>
              Photo by:
              <a href={this.props.href} target="_blank"> {this.props.username}</a>
            </Card.Header>
            <Card.Description>
              {this.props.description}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

export default ImageCard;