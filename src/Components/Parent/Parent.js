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

import ParentHome from './parent-home';
import ParentCourses from './parent-courses';
import ParentGrades from './parent-grades';
import ParentMessages from './parent-messages';

const navItems = [{
  exact: true,
  label: 'Home',
  to: '/Parent/',
  icon: 'home',
},
{
  label: 'Courses',
  to: '/Parent/Courses',
  icon: 'school',
},
{
  label: 'Grades',
  to: '/Parent/Grades',
  icon: 'grade',
},
{
  label: 'Messages',
  to: '/Parent/Messenger',
  icon: 'message',
},
];

class Parent extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <NavigationDrawer
            drawerTitle="{PROJECT YODA}"
            toolbarTitle="Parent Draft"
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
            drawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
          >
            <Switch key={location.key}>
              <Route exact path="/Parent/" location={location} component={ParentHome} />
              <Route path="/Parent/Courses" location={location} component={ParentCourses} />
              <Route path="/Parent/Grades" location={location} component={ParentGrades} />
              <Route path="/Parent/Messenger" location={location} component={ParentMessages} />
            </Switch>
          </NavigationDrawer>
        )}
      />
    );
  }
}

export default Parent;
