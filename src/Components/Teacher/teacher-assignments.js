import React, { Component } from 'react';
import { Card, 
        CardTitle, 
        CardText,
        DataTable,
        TableHeader,
        TableBody,
        TableRow,
        TableColumn,
        FileInput, 
        SVGIcon } from 'react-md';

export default class TeacherAssignments extends Component {
  render() {
    return (
      <div className="md-grid">
        <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
          <CardTitle title="Assignments" subtitle="" />
          <CardText>
            <DataTable baseId="table-with-interactions">
            <TableHeader>
              <TableRow>
                <TableColumn>Subject</TableColumn>
                <TableColumn>Topic</TableColumn>
                <TableColumn>Deadline</TableColumn>
                <TableColumn>Submitted By</TableColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                  <TableColumn>Math</TableColumn>
                  <TableColumn>Sets</TableColumn>
                  <TableColumn>May 2, 2018</TableColumn>
                  <TableColumn>John A.</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Science</TableColumn>
                  <TableColumn>BioChemistry</TableColumn>
                  <TableColumn>May 3, 2018</TableColumn>
                  <TableColumn>John B.</TableColumn>
                </TableRow>
            </TableBody>
            </DataTable>
          </CardText>
        </Card>
        <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
      <CardTitle title="Check Assignments" subtitle="" />
      
    </Card>
      </div>
    );
  }
}
