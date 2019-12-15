import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import PageContent from './components/PageContent';
import ThemeProvider from './context/theme.context';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default App;
