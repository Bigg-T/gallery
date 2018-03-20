/**
 * Display search results.
 */

import React, {Component} from 'react';
import {Card, Container,Grid} from 'semantic-ui-react';
import ImageCard from '../component/ImageCard';
import Search from '../unsplash/Search';
import Error from '../component/Error';
import * as util from '../unsplash/util';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError : false,
      code : 200,
      msg : '',
      results : [],
    };
    this.itemPerPage = 25;
    this.itemPerRow = 3;
    this.random = new Search(this.itemPerPage, this.props.location.state.referrer);
  }

  componentDidMount() {
    let promise = this.random.getPromise();
    promise
    .then(res => {
      const data = res.data;
      this.setState({results : data});
    })
    .catch(res => {
      res = res.response;
      let status = res.status || 400; //if doesn't exist, just have generic 400 code
      let msg = util.getErrorMsg(res.data);
      this.setState({isError:true, msg:msg, status:status});
    });
  }

  /**
   * Created a list cards with the correct information.
   */
  renderCard() {
    let node = this.state.results.map(obj => {
      let src = util.getUrlCustom(obj);
      let username = util.getUserUsername(obj);
      return (<ImageCard key={username}
                         src={src}
                         href={util.userHref(username)}
                         username={username}/>);
    });
    return node;
  }

  render() {
    let node = (
      !this.state.isError ?
        (
          <div>
            <Card.Group itemsPerRow={this.itemPerRow} stackable>
              {this.renderCard()}
            </Card.Group>
          </div>
        )
        :
        (<Error error_code={this.state.code} msg={this.state.msg} />)
    );
    return (
      <div>
        {node}
      </div>
    );
  }
}

export default SearchResult;