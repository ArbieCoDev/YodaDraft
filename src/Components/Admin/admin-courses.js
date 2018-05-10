import React, { Component } from 'react';
import { Card, 
          CardTitle, 
          CardText,
          DataTable,
          TableHeader,
          TableBody,
          TableRow,
          TableColumn, } from 'react-md';


export default class AdminCourses extends Component {
  render() {
    return (
      <div className="md-grid">
        <Card className="cards__example md-cell md-cell--12 md-cell--8-tablet">
          <CardTitle title="Courses" subtitle="" />
          <CardText>
          <DataTable baseId="table-with-interactions">
            <TableHeader>
              <TableRow>
                <TableColumn>Course</TableColumn>
                <TableColumn >Subject</TableColumn>
                <TableColumn>Topic</TableColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                  <TableColumn>STEM</TableColumn>
                  <TableColumn>Applied Math</TableColumn>
                  <TableColumn>Venn Diagrams</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>GAMES</TableColumn>
                  <TableColumn>Minecraft</TableColumn>
                  <TableColumn>Crafting Guides and Tips</TableColumn>
                </TableRow>
            </TableBody>
          </DataTable>
          </CardText>
        </Card>
      </div>
    );
  }
}
