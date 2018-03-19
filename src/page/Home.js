/**
 *
 */
import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import ImageCard from '../component/ImageCard';
import DisplayError from '../component/DisplayError';
import Random from '../unsplash/Random';
import * as util from '../unsplash/util';

class Home extends Component {
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
    this.random = new Random(this.itemPerPage);
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
      let code = res.status;
      let msg = util.getErrorMsg(res.data);
      this.setState({isError:true, msg:msg, code:code});
    });
  }

  render() {
    return "";
  }
}

export default Home;
