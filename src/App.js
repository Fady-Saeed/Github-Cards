import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Grid } from "semantic-ui-react";
import CardList from "./Components/CardList";
import CardAdderForm from "./Components/CardAdderForm";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  render() {
    return (
      <React.Fragment>
        <Grid columns={1} centered padded>
          <Grid.Column>
            <CardAdderForm handleSubmit={this.handleSubmit} />
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={16}>
              <CardList users={this.state.users} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
  handleSubmit = username => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(response => {
        this.setState({
          users: [...this.state.users, response.data]
        });
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error: Github username is invalid.");
      });
  };
}

export default App;
