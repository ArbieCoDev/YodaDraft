import React, { Component } from 'react';
import { Card, 
        CardTitle, 
        CardText,
        DataTable,
        TableHeader,
        TableBody,
        TableRow,
        TableColumn, } from 'react-md';

export default class AdminTeachers extends Component {
  render() {
    return (
      <div className="md-grid">
        <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
          <CardTitle title="Teachers" subtitle="" />
          <CardText>
            <DataTable baseId="table-with-interactions">
            <TableHeader>
              <TableRow>
                <TableColumn>Name</TableColumn>
                <TableColumn>Subject</TableColumn>
                <TableColumn>Level</TableColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                  <TableColumn>John</TableColumn>
                  <TableColumn>Math</TableColumn>
                  <TableColumn>Grade 9</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Joe</TableColumn>
                  <TableColumn>Science</TableColumn>
                  <TableColumn>Grade 8</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Jeremy</TableColumn>
                  <TableColumn>Homeroom</TableColumn>
                  <TableColumn>Grade 9</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Janice</TableColumn>
                  <TableColumn>Literature</TableColumn>
                  <TableColumn>Grade 6</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Jen</TableColumn>
                  <TableColumn>Philosophy</TableColumn>
                  <TableColumn>Grade 12</TableColumn>
                </TableRow>
            </TableBody>
            </DataTable>
          </CardText>
        </Card>
        <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
      <CardTitle title="Placeholder" subtitle="" />
      <CardText>
        <p>
          Some functions/Text
        </p>
      </CardText>
    </Card>
      </div>
    );
  }
}
