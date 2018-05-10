import React, { Component } from 'react';
import { Card, 
          CardTitle, 
          CardText,
          DataTable,
          TableHeader,
          TableBody,
          TableRow,
          TableColumn, } from 'react-md';


export default class TeacherCourses extends Component {
  render() {
    return (
      <div className="md-grid">
        <Card className="cards__example md-cell md-cell--4md-cell--8-tablet">
          <CardTitle title="Science" />
          <CardText>
             
          </CardText>
        </Card>
        <Card className="cards__example md-cell md-cell--4md-cell--8-tablet">
          <CardTitle title="Math"  />
          <CardText>
             
          </CardText>
        </Card>
        <Card className="cards__example md-cell md-cell--4md-cell--8-tablet">
          <CardTitle title="Games"/>
          <CardText>
            
          </CardText>
        </Card>
        
      </div>
    );
  }
}
