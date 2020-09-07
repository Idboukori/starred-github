import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getRepositories } from "../src/Actions";
import Cards from "./Components/Card/Cards";
import moment from 'moment';

const last30days = moment(new Date()).subtract(30,'day').format("YYYY-MM-DD");

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      repositories : []
    }
  }

  componentDidMount() {
    this.props.getRepositories(last30days);
  }

  componentWillReceiveProps(newProps) {

    this.setState({
      repositories: newProps.repositories,
    });
  }

  render() {
    return (
        !this.state.loading ? (
            this.state.repositories.map((repo) => {
              return <Cards repo={repo} />
            })) :
        (<div>run</div>)
    )

    }


}

const mapStateToProps = ({repos}) => {
  const {repositories} = repos  ;
  const {loading} = repos ;
  return {repositories,loading};
};

export default connect(mapStateToProps,{
  getRepositories
})(App);

