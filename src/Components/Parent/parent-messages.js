import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-md';

export default class ParentMessages extends Component {
  render() {
    return (
  <div className="md-grid">
    <Card className="cards__example md-cell md-cell--12 md-cell--8-tablet">
      <CardTitle title="Messages" subtitle="" />
      <CardText>
        <h5>Messages Placeholder</h5>
      </CardText>
    </Card>
  </div>
    );
  }
}
