import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount = async() => {
    const url = (`http://localhost:3001/api/v1/urls`)
    try {
      const response = await fetch(url)
      const getUrls = await response.json()
      if (!response.ok) {
        throw new Error(response.status)
      }
      this.setState({ urls: getUrls.urls})
    } catch(error) {
    }
  }

  addUrl = async(newUrl) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/urls', {
        method: 'POST',
        body: JSON.stringify({
          long_url: newUrl.long_url,
          title: newUrl.title
        }),
        headers: {
          'Content-Type': 'application/JSON'
        }});
      if (!response.ok) {
        console.log(response.status)
        throw new Error(response.status)
      }
      const data = await response.json();
      this.setState({ urls: [...this.state.urls, data]})
      return data;
    }
    catch (error) {
      console.log(error.message)
    }
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
        </header>
          <UrlForm addUrl={this.addUrl} />
          <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
