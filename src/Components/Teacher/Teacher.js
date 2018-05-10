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

import TeacherHome from './teacher-home';
import TeacherCourses from './teacher-courses';
import TeacherQuizzes from './teacher-quizzes';
import TeacherAssignments from './teacher-assignments';
import TeacherGrades from './teacher-grades';
import TeacherMessages from './teacher-messages';

const navItems = [{
  exact: true,
  label: 'Profile',
  to: '/Teacher/',
  icon: 'face',
},
{
  label: 'My Courses',
  to: '/Teacher/Courses',
  icon: 'school',
},
{
  label: 'My Quizzes',
  to: '/Teacher/Quizzes',
  icon: 'assessment',
},
{
  label: 'Assignments',
  to: '/Teacher/Assignments',
  icon: 'assignment',
},
{
  label: 'Grades',
  to: '/Teacher/Grades',
  icon: 'grade',
},
{
  label: 'Messages',
  to: '/Teacher/Messenger',
  icon: 'message',
},
];

class Teacher extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <NavigationDrawer
            drawerTitle="{PROJECT YODA}"
            toolbarTitle="Teacher Draft"
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
            drawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
          >
            <Switch key={location.key}>
              <Route exact path="/Teacher/" location={location} component={TeacherHome} />
              <Route path="/Teacher/Courses" location={location} component={TeacherCourses} />
              <Route path="/Teacher/Quizzes" location={location} component={TeacherQuizzes} />
              <Route path="/Teacher/Assignments" location={location} component={TeacherAssignments} />
              <Route path="/Teacher/Grades" location={location} component={TeacherGrades} />
              <Route path="/Teacher/Messenger" location={location} component={TeacherMessages} />
            </Switch>
          </NavigationDrawer>
        )}
      />
    );
  }
}

export default Teacher;
