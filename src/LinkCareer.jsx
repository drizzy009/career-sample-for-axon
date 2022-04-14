import React from "react";
import { Link } from "react-router-dom";
import Career from "./Career";
import { ReactDOM } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import List from "./List";

class LinkCareer extends React.Component {
  constructor(props) {
    super(props);
    this.textClick = this.textClick.bind(this);
    this.textUnClick = this.textUnClick.bind(this);
    this.state = {isClicked: false};
  }

  textClick() {
    this.setState({isClicked: true});
  }

  textUnClick() {
    this.setState({isClicked: false});
  }

  render() {
    const isClicked = this.state.isClicked;
    let button;

    if (isClicked) {
      button = <LogoutButton onClick={this.textUnClick} />;
    } else {
      button = <LoginButton onClick={this.textClick} />;
    }

    return (
      <div>
        <Page isClicked={isClicked} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <List/>;
}

function Page(props) {
  const isClicked = props.isClicked;
  if (isClicked) {
    return <Career />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}


export default LinkCareer;
