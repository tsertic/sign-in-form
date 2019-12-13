import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';

const App: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Form />
    </Fragment>
  );
};

export default App;
