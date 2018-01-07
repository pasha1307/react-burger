import React, { Component } from 'react';
import Layout from "./hoc/Layout/Layout";
import Builder from "./containers/Builder";


class App extends Component {
  state = {
    show: true
  }
  componentDidMount() {

  }
  render() {

    return (
      <Layout>
          <Builder/>
      </Layout>
    );
  }
}

export default App;
