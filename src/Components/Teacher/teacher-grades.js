import React, { Component } from 'react';
import { Card, 
        CardTitle, 
        CardText,
        DataTable,
        TableHeader,
        TableBody,
        TableRow,
        TableColumn,
     } from 'react-md';

export default class TeacherGrades extends Component {
  render() {
    return (
      <div className="md-grid">
        <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
          <CardTitle title="Assignments" subtitle="" />
          <CardText>
            <DataTable baseId="simple-pagination">
            <TableHeader>
              <TableRow selectable={false}>
                <TableColumn>Subject</TableColumn>
                <TableColumn>Grade</TableColumn>
                <TableColumn>Student</TableColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow selectable={false}>
                  <TableColumn>Math</TableColumn>
                  <TableColumn>A</TableColumn>
                  <TableColumn>Joseph G.</TableColumn>
                </TableRow>
                <TableRow selectable={false}>
                  <TableColumn>Science</TableColumn>
                  <TableColumn>C</TableColumn>
                  <TableColumn>Arbae A.</TableColumn>
                </TableRow>
            </TableBody>
            </DataTable>
          </CardText>
        </Card>
        <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
      <CardTitle title="Some Text" subtitle="" />
    
    </Card>
      </div>
    );
  }
}
