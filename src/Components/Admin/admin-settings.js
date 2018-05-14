import React, { Component } from 'react';
import { Card, 
         CardTitle, 
         CardText,
         Avatar,
         Divider,
         FontIcon,
         List,
         ListItem,
         Subheader, } from 'react-md';

const InfoIcon = () => <FontIcon>info</FontIcon>;
const StarIcon = () => <FontIcon>star</FontIcon>;

export default class AdminSettings extends Component {
  render() {
    return (
  <div className="md-grid">
    <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
      <CardTitle title="Setting 1" subtitle="" />
      <CardText>
      <div className="md-grid">
    <List className="md-cell md-paper md-paper--1">
      <ListItem primaryText="System" />
      <ListItem primaryText="Content" />
      <ListItem primaryText="Mail" />
    </List>
    <List className="md-cell md-paper md-paper--1">
      <Subheader primaryText="Folders" />
      <ListItem
        leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
        rightIcon={<InfoIcon />}
        primaryText="E-Portfolios"
        secondaryText="Jan 9, 2014"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
        rightIcon={<InfoIcon />}
        primaryText="E-Lessons"
        secondaryText="Jan 17, 2014"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
        rightIcon={<InfoIcon />}
        primaryText="E-Books"
        secondaryText="Jan 28, 2014"
      />
      <Divider inset />
      <Subheader primaryText="Recent Files" />
      <ListItem
        leftAvatar={<Avatar suffix="blue" icon={<FontIcon>Videos</FontIcon>} />}
        rightIcon={<InfoIcon />}
        primaryText="Permutations & Theorems.mp4"
        secondaryText="Jan 20, 2014"
      />
      <ListItem
        leftAvatar={<Avatar suffix="amber" icon={<FontIcon>insert_photo</FontIcon>} />}
        rightIcon={<InfoIcon />}
        primaryText="New"
        secondaryText="Jan 10, 2014"
      />
    </List>
    <List className="md-cell md-paper md-paper--1">
      <Subheader primaryText="Three line example" primary />
      <ListItem
        leftAvatar={<Avatar suffix="deep-purple">B</Avatar>}
        rightIcon={<StarIcon />}
        primaryText="Some Text"
        secondaryText={'Some Text'}
        threeLines
      />
      <ListItem
        leftAvatar={<Avatar suffix="green">Q</Avatar>}
        rightIcon={<StarIcon />}
        primaryText="Some Text"
        secondaryText={'Some Text'}
        threeLines
      />
      <ListItem
        leftAvatar={<Avatar suffix="orange">A</Avatar>}
        rightIcon={<StarIcon />}
        primaryText="Some Text"
        secondaryText="Some Text"
        threeLines
      />
    </List>
  </div>
      </CardText>
    </Card>
    <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
      <CardTitle title="Yoda Functions" subtitle="" />
      <CardText>
        <p>
        </p>
      </CardText>
    </Card>
    <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
      <CardTitle title="Setting 3" subtitle="Draft" />
      <CardText>
        <p>
          Some text here
        </p>
      </CardText>
    </Card>
    <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
      <CardTitle title="Setting 4" subtitle="Draft" />
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
