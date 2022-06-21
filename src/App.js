import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Page from './layout/Page/Page';
import HomePage from './pages/Home/Home';
import About from './pages/About/About';
import './styles/globals.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  render() {
    return (
      <BrowserRouter>
        <Page>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Page>
      </BrowserRouter>
    );
  }
}

export default App;
