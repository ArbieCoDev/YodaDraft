import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-md';
import './student-home.css';

export default class StudentHome extends Component {
  render() {
    return (
  <div className="md-grid">
    <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
      <CardTitle title="Student Home" subtitle="" />
      <CardText>
        <h5>Some Text here</h5>
      </CardText>
    </Card>
    <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
      <CardTitle title="Placeholder" subtitle="" />
      <CardText>
        <p>
          Some text here
        </p>
      </CardText>
    </Card>
    <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
      <CardTitle title="Placeholder" subtitle="Draft" />
      <CardText>
        <p>
          Some text here
        </p>
      </CardText>
    </Card>
    <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
      <CardTitle title="Placeholder" subtitle="Draft" />
      <CardText>
        <p>
          Some text here
        </p>
      </CardText>
    </Card>
  </div>
    );
  }
}
