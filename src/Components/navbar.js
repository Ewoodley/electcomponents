import React, { Component } from "react";

import { Menu } from "semantic-ui-react";

export default class Navbar extends Component {
  state = {};

  handleItemClick = ({ name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="Home"
          active={activeItem === "/"}
          onClick={this.handleItemClick}
          href="/"
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="diodes"
          active={activeItem === "diodes"}
          onClick={this.handleItemClick}
          href="/diodes"
        >
          Diodes
        </Menu.Item>

        <Menu.Item
          name="resistors"
          active={activeItem === "resistors"}
          onClick={this.handleItemClick}
          href="/resistors"
        >
          Resistors
        </Menu.Item>

        <Menu.Item
          name="Capacitors"
          active={activeItem === "Capacitors"}
          onClick={this.handleItemClick}
          href="/capacitors"
        >
          Capacitors
        </Menu.Item>

        <Menu.Item
          name="Integrated Circuits"
          active={activeItem === "Integrated Circuits"}
          onClick={this.handleItemClick}
          href="/ic"
        >
          Integrated Circuits
        </Menu.Item>
      </Menu>
    );
  }
}
