import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {

  constructor(props){
    super(props);
    this.state ={

    }
  }
  render() {

    return (
        <div>
          Working!
        </div>

    );
  }
}

const mapStateToProps = () => {

  return {};
};

export default connect(mapStateToProps,{

})(App);

