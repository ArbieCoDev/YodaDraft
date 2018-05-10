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

export default class StudentGrades extends Component {
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
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow selectable={false}>
                  <TableColumn>Math</TableColumn>
                  <TableColumn>A</TableColumn>
                </TableRow>
                <TableRow selectable={false}>
                  <TableColumn>Science</TableColumn>
                  <TableColumn>A</TableColumn>
                </TableRow>
                <TableRow selectable={false}>
                  <TableColumn>Homeroom</TableColumn>
                  <TableColumn>A</TableColumn>
                </TableRow>
                <TableRow selectable={false}>
                  <TableColumn>Literature</TableColumn>
                  <TableColumn>B+</TableColumn>
                </TableRow >
                <TableRow selectable={false}>
                  <TableColumn>Philosophy</TableColumn>
                  <TableColumn>?</TableColumn>
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
