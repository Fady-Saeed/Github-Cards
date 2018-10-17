import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";

const styles = {
  inlineBlock: {
    display: "inline-block"
  },
  mx5: {
    margin: "auto 2.5em"
  },
  m0: {
    margin: 0
  },
  mxauto: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  my3: {
    marginTop: "1.5em",
    marginBottom: "1.5em"
  }
};

class CardListItem extends Component {
  constructor(props) {
    super(props);
  }
  getDescription() {
    let description = "";
    if (this.props.bio) {
      description = this.props.bio;
    } else {
      description = `${this.props.name} `;
      if (this.props.location)
        description += `is living in ${this.props.location} and `;
      description += `has ${this.props.public_repos} Public Repositories`;
    }
    return description;
  }
  render() {
    return (
      <Card
        style={{ ...styles.mxauto, ...styles.my3 }}
        image={this.props.avatar_url}
        header={this.props.name}
        meta={this.props.type}
        description={this.getDescription()}
        extra={
          <React.Fragment>
            <a>
              <Icon name="users" />
              {this.props.followers} Follower
              {this.props.followers > 1 ? "s " : " "}
            </a>
            <a>
              <Icon name="users" />
              {this.props.following} Following
              {this.props.following > 1 ? "s " : " "}
            </a>
          </React.Fragment>
        }
      />
    );
  }
}

export default CardListItem;
