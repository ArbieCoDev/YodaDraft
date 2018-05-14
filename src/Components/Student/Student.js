import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import NavLink from '../NavLink';
import $ from 'jquery';
import {
    DataTable,
    TableHeader,
    TableBody,
    TableRow,
    TableColumn,
  } from 'react-md';

import StudentHome from './student-home';
import StudentCourses from './student-courses';
import StudentQuizzes from './student-quizzes';
import StudentAssignments from './student-assignments';
import StudentGrades from './student-grades';
import StudentPortfolio from './student-portfolio';
import StudentMessages from './student-messages';
import StudentTodo from './student-todo';
import StudentHomeroom from './student-homeroom';
import StudentCourse1 from './student-course1';
import './Student.css';

const navItems = [{
  exact: true,
  label: 'Dashboard',
  to: '/Student/',
  icon: 'home',
},
{
  label: 'Homeroom',
  to: '/Student/Homeroom',
  icon: 'school',
},
{
  label: 'LEGO Robotics EV3',
  to: '/Student/Lego-Robotics-EV3',
  icon: 'school',
},
{
  label: 'To Do List',
  to: '/Student/Todo',
  icon: 'list',
},
{
  label: 'Grades',
  to: '/Student/Grades',
  icon: 'grade',
},
{
  label: 'Portfolio',
  to: '/Student/Portfolio',
  icon: 'folder_shared',
},
{
  label: 'Messages',
  to: '/Student/Messenger',
  icon: 'message',
},
];

class Student extends Component {

  constructor(props) {
    super();

    this.state = { toolbarTitle: this.getCurrentTitle(props) };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ toolbarTitle: this.getCurrentTitle(nextProps) });
  }

  getCurrentTitle = ({ location: { pathname } }) => {
    let lastSection = pathname.substring(pathname.lastIndexOf('/') + 1);

    if(lastSection === ""){
      lastSection = 'Student Dashboard';
    }
    $('#main-toolbar-title').text(lastSection);


  };

  render() {
    return (
      <Route
        render={({ location }) => (
          <NavigationDrawer
            drawerTitle="{PROJECT YODA}"
            toolbarTitle="Student Dashboard"
            toolbarId="main-toolbar"
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
            drawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
          >
            <Switch key={location.key}>
              <Route exact path="/Student/" location={location} component={StudentHome} />
              <Route path="/Student/Courses" location={location} component={StudentCourses} />
              <Route path="/Student/Quizzes" location={location} component={StudentQuizzes} />
              <Route path="/Student/Assignments" location={location} component={StudentAssignments} />
              <Route path="/Student/Grades" location={location} component={StudentGrades} />
              <Route path="/Student/Portfolio" location={location} component={StudentPortfolio} />
              <Route path="/Student/Messenger" location={location} component={StudentMessages} />
              <Route path="/Student/Todo" location={location} component={StudentTodo} />
              <Route path="/Student/Homeroom" location={location} component={StudentHomeroom} />
              <Route path="/Student/Lego-Robotics-EV3" location={location} component={StudentCourse1} />
            </Switch>
          </NavigationDrawer>
        )}
      />
    );
  }
}

export default Student;
