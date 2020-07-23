import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./css/App.css";
import data from "./data.json";
import MainPage from "./pages/MainPage";
import MessagePage from "./pages/MessagePage";

class App extends Component {
  state = { messages: [] };

  fetchData = (data) => {
    this.setState({ messages: data });
  };

  componentDidMount = () => {
    this.fetchData(data);
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            render={() => <MainPage data={this.state.messages} />}
          />
          <Route
            path="/messages"
            render={() => <MessagePage data={this.state.messages} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
