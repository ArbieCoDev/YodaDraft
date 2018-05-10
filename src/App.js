import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Admin from './Components/Admin/Admin';
import Student from './Components/Student/Student';
import Teacher from './Components/Teacher/Teacher';
import Parent from './Components/Parent/Parent';
import Home from './Home';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/Admin" component={Admin}/>
          <Route path="/Student" component={Student}/>
          <Route path="/Teacher" component={Teacher}/>
          <Route path="/Parent" component={Parent}/>
        </div>
      </Router>
    );
  }
}

export default App;
