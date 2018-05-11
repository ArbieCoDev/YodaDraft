import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import NavLink from '../NavLink';
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

const navItems = [{
  exact: true,
  label: 'Profile',
  to: '/Student/',
  icon: 'face',
},
{
  label: 'My Courses',
  to: '/Student/Courses',
  icon: 'school',
},
{
  label: 'To Do List',
  to: '/Student/Todo',
  icon: 'message',
},
{
  label: 'Quizzes',
  to: '/Student/Quizzes',
  icon: 'assessment',
},
{
  label: 'Assignments',
  to: '/Student/Assignments',
  icon: 'assignment',
},
{
  label: 'Grades',
  to: '/Student/Grades',
  icon: 'grade',
},
{
  label: 'Portfolio',
  to: '/Student/Eprofile',
  icon: 'folder_shared',
},
{
  label: 'Messages',
  to: '/Student/Messenger',
  icon: 'message',
},
];

class Student extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <NavigationDrawer
            drawerTitle="{PROJECT YODA}"
            toolbarTitle="Student Draft"
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
            drawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
          >
            <Switch key={location.key}>
              <Route exact path="/Student/" location={location} component={StudentHome} />
              <Route path="/Student/Courses" location={location} component={StudentCourses} />
              <Route path="/Student/Quizzes" location={location} component={StudentQuizzes} />
              <Route path="/Student/Assignments" location={location} component={StudentAssignments} />
              <Route path="/Student/Grades" location={location} component={StudentGrades} />
              <Route path="/Student/Eprofile" location={location} component={StudentPortfolio} />
              <Route path="/Student/Messenger" location={location} component={StudentMessages} />
              <Route path="/Student/Todo" location={location} component={StudentTodo} />
            </Switch>
          </NavigationDrawer>
        )}
      />
    );
  }
}

export default Student;
