import React, { Component } from 'react';
import logo from '../imgs/logo.svg';
import { SearchBar } from '../components/SearchBar';
import { SearchResults } from '../components/SearchResults';
import ajax from 'superagent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { results: [] };
    this.Search = this.Search.bind(this);
  }

  Search(e) {
    // Call API
    ajax.get('https://www.giantbomb.com/api/search')
    .query({ query: e })
    .query({ api_key: 'b0fb21b40d2aa4c938630d64ed4744169194253f' })
    .query({ format: 'json' })
    .withCredentials()
    .end((error, response) => {
      if (!error && response) {
        console.log(response.body.results);
        this.setState({
          results: response.body.results
        });
      } else {
        console.log(error);
      }
    });
  }

  render() {
    return (
      <div className="App">
          <SearchBar onChange={this.Search} />
          <SearchResults results={this.state.results}/>
      </div>
    );
  }
}

export default App;
