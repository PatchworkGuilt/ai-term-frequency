import React, { Component } from 'react';
import logo from './logo_header.png';
import { Grid, ResponsiveColumn } from './Components/Layout'
import AddDocumentMenu from './Containers/Documents'
import {SearchForm, SearchResults} from './Containers/Search'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Grid>
          <ResponsiveColumn>
            <h2>1. Add Documents</h2>
            <AddDocumentMenu />
          </ResponsiveColumn>
          <ResponsiveColumn>
            <h2>2. Enter Search Terms</h2>
            <SearchForm />
          </ResponsiveColumn>
        </Grid>
        <hr />
        <Grid>
          <ResponsiveColumn>
            <h2>3. View Results</h2>
            <SearchResults />
          </ResponsiveColumn>
        </Grid>
      </div>
    );
  }
}

export default App;
