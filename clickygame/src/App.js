import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Head from "./components/Head";
import Spider from "./card.json";

var shuffle = require('shuffle-array')

let score = 0
let highScore = 0
let text = "Take a dive into the Spider-verse!"

class App extends Component {
  state = {
    Spider,
    score,
    clicked: [],
  };

  shuffler = id => {
    let currentClicked = this.state.clicked;
    if (this.state.clicked.indexOf(id) === -1) {
      currentClicked.push(id);
      score += 1;
      shuffle(Spider);
    }
    else {
      score = 0;
      text = "Looks like they are not getting back to their universe."
      currentClicked = []
    }

    if (score > highScore) {
      highScore = score
    }

    this.setState({ clicked: currentClicked })
  };

  render() {
    console.log(this.state.Spider);
    console.log(this.state.clicked);
    return (
      <Wrapper>
        <Head>
          <nav className="navbar navbar-light bg-light">
            <h1 id="unique">{text} </h1>
            <h1>Score: <span id="currentScore">{score}</span></h1>
            <h1>High Score: <span id="highScore">{highScore}</span></h1>
          </nav>
        </Head>
        {this.state.Spider.map(friend => (
          <Card
            shuffler={this.shuffler}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            clicked={friend.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;