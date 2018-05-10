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

import AdminHome from './admin-home';
import AdminTeachers from './admin-teachers';
import AdminStudents from './admin-students';
import AdminCourses from './admin-courses';
import AdminSettings from './admin-settings';
import AdminParents from './admin-parents';

const navItems = [{
  exact: true,
  label: 'Dashboard',
  to: '/Admin/Home',
  icon: 'home',
}, {
  label: 'Teachers',
  to: '/Admin/Teachers',
  icon: 'people',
},
{
  label: 'Students',
  to: '/Admin/Students',
  icon: 'wc',
},
{
  label: 'Parents',
  to: '/Admin/Parents',
  icon: 'face',
},
{
  label: 'Courses',
  to: '/Admin/Courses',
  icon: 'school',
},
{
  label: 'Settings',
  to: '/Admin/Settings',
  icon: 'settings',
}
];

class Admin extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <NavigationDrawer
            drawerTitle="{PROJECT YODA}"
            toolbarTitle="Admin Draft"
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
            drawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
          >
            <Switch key={location.key}>
              <Route exact path="/Admin/Home" location={location} component={AdminHome} />
              <Route path="/Admin/Teachers" location={location} component={AdminTeachers} />
              <Route path="/Admin/Students" location={location} component={AdminStudents} />
              <Route path="/Admin/Settings" location={location} component={AdminSettings} />
              <Route path="/Admin/Courses" location={location} component={AdminCourses} />
              <Route path="/Admin/Parents" location={location} component={AdminParents} />
            </Switch>
          </NavigationDrawer>
        )}
      />
    );
  }
}

export default Admin;
