import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'
import Form from './module/form/form'
import Table from './module/table/table'

function App() {
  return (
    <div className="App">
     <Router>
      <Route path="/" render={props => <Redirect to="/login"/>}/>
      <Route path="/login" component={Form}/>
      <Route path="/shelf" component={Table}/>
    </Router>
    </div>
  );
}

export default App;
