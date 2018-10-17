import React, { Component } from "react";
import CardListItem from "../Components/CardListItem";
import { Grid } from "semantic-ui-react";

const CardList = props => {
  return (
    <Grid verticalAlign="middle" centered className="ui link cards">
      <Grid.Row>
        {props.users.map((user, iteration) => (
          <Grid.Column key={iteration} mobile={16} tablet={8} computer={4}>
            <CardListItem {...user} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default CardList;
