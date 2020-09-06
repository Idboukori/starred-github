import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getRepositories } from "../src/Actions";


class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      repositories : []
    }
  }

  componentDidMount() {
    this.props.getRepositories();
  }

  componentWillReceiveProps(newProps) {

    this.setState({
      repositories: newProps.repositories,
    });
  }

  render() {

    console.log(this.state.repositories);

    return (
        <div>
          {this.state.repositories.map( (repo,key) => {
            return(

                <div key={key}><img src={repo['owner']['avatar_url']}/>{repo['full_name']}</div>
            )
          })}
        </div>

    );
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

