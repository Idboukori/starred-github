import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getRepositories } from "../src/Actions";
import Cards from "./Components/Card/Cards";
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroll-component';
import LinearProgress from '@material-ui/core/LinearProgress';

const last30days = moment(new Date()).subtract(30,'day').format("YYYY-MM-DD");

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      repositories : [],
      page : 1
    }
  }

  componentDidMount() {
    this.props.getRepositories(last30days,1);
  }

  componentWillReceiveProps(newProps) {

    this.setState({
      repositories: this.state.repositories.concat(newProps.repositories),
    });
  }

  render() {
      return (

        <InfiniteScroll
            dataLength={this.props.repositories.length}
            next={() => {
              console.log(this.state.page);
              this.setState({page : this.state.page+1})
              this.props.getRepositories(last30days,this.state.page)
            }}
            hasMore={!this.props.error}
            loader={<LinearProgress />}
            endMessage={
                <p style={{textAlign: 'center'}}>
                    <b>End</b>
                </p>

            }
        >
          {
            this.props.repositories.map((repo) => {
              return <Cards repo={repo} />
            })
          }
        </InfiniteScroll>


    )

    }


}

const mapStateToProps = ({repos}) => {
  const {repositories} = repos  ;
  const {loading} = repos ;
  const {error} = repos;
  return {repositories,loading,error};
};

export default connect(mapStateToProps,{
  getRepositories
})(App);

