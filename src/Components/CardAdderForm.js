import React, { Component } from "react";
import { Icon, Input } from "semantic-ui-react";

const styles = {
  centered: {
    textAlign: "center"
  }
};

class CardAdderForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.centered}>
        <Input
          icon={<Icon name="plus" circular link />}
          placeholder="Add..."
          required
          onChange={this.handleUsernameChange}
          value={this.state.username}
        />
      </form>
    );
  }
  handleSubmit = e => {
    e.preventDefault();
    let username = this.state.username;
    this.setState({ username: "" });
    return this.props.handleSubmit(username);
  };
  handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
  };
}

export default CardAdderForm;
