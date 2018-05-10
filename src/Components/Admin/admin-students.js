import React, { Component } from 'react';
import { Card, 
          CardTitle, 
          CardText,
          DataTable,
          TableHeader,
          TableBody,
          TableRow,
          TableColumn, } from 'react-md';


export default class AdminStudents extends Component {
  render() {
    return (
      <div className="md-grid">
        <Card className="cards__example md-cell md-cell--12 md-cell--8-tablet">
          <CardTitle title="Students" subtitle="" />
          <CardText>
          <DataTable baseId="table-with-interactions">
            <TableHeader>
              <TableRow>
                <TableColumn>Name</TableColumn>
                <TableColumn >Age</TableColumn>
                <TableColumn>Level</TableColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                  <TableColumn>Alice</TableColumn>
                  <TableColumn>12</TableColumn>
                  <TableColumn>Grade 9</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Anna</TableColumn>
                  <TableColumn>10</TableColumn>
                  <TableColumn>Grade 8</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Adam</TableColumn>
                  <TableColumn>11</TableColumn>
                  <TableColumn>Grade 9</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>AJ</TableColumn>
                  <TableColumn>8</TableColumn>
                  <TableColumn>Grade 6</TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Arnie</TableColumn>
                  <TableColumn>16</TableColumn>
                  <TableColumn>Grade 12</TableColumn>
                </TableRow>
            </TableBody>
          </DataTable>
          </CardText>
        </Card>
      </div>
    );
  }
}
