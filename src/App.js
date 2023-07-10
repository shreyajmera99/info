import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true, // Set initial loading state to true
    };
  }

  componentDidMount() {
    // Simulating API loading for 3 seconds
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render() {

    return (
      <>
        <div>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<News key="general" country="in" category="general" />} />
              <Route path="/business" element={<News key="business" country="in" category="business" />} />
              <Route path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" />} />
              <Route path="/health" element={<News key="health" country="in" category="health" />} />
              <Route path="/science" element={<News key="science" country="in" category="science" />} />
              <Route path="/technology" element={<News key="technology" country="in" category="technology" />} />
              <Route path="/sports" element={<News key="sports" country="in" category="sports" />} />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}
