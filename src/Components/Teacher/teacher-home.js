import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-md';

export default class TeacherHome extends Component {
  render() {
    return (
  <div className="md-grid">
    <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
      <CardTitle title="Teacher Home" subtitle="" />
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
