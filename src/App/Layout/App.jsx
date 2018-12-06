import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import EventDashboad from "../../Features/events/EventDashboard/EventDashboard";
import Navbar from "../../Features/nav/Navbar/Navbar";

class App extends Component {
  render() {
    return [
      <Navbar />,
      <Container className="main">
        <EventDashboad />
      </Container>
    ];
  }
}

export default App;
