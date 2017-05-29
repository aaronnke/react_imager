import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './App.css';
import api from './api.js';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      images: null,
      pageNum: 1
    }
  }

  componentDidMount() {
    api.fetchSampleImages(this.state.pageNum)
      .then((images) => {
        this.setState((prevState) => {
          return {
            images: images,
            pageNum: prevState.pageNum + 1
          }
        })
    })

    setInterval(() => {
      api.fetchSampleImages(this.state.pageNum)
        .then((images) => {
          this.setState((prevState) => {
            return {
              images: images,
              pageNum: prevState.pageNum + 1
            }
          })
      })
    }, 10000)
  }

  render() {
    const items = this.state.images && this.state.images.map((image, index) => {
      let img = image.images.normal;
      return (
        <img key={img} src={img} className="Image" alt={index} />
      )
    })

    return (
      <div className="App">
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={1000}
          transitionLeave={false}>
          {items}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;
