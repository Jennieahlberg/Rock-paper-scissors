import { Component, OnInit } from '@angular/core';
import { containerRefreshStart } from '../../node_modules/@angular/core/src/render3/instructions';

interface WordsOfWisdom {
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Component({ /* ... */ })
export class AppComponent {
  random = Math.floor(Math.random() * 3) + 1;
  computerChoiceRock = false;
  computerChoicePaper = false;
  computerChoiceScissors = false;
  winner = false;
  loser = false;
  tie = false;
  start = true;
  isDisabled = false;

  rock() {
    if (this.random === 1) {
      this.computerChoiceRock = !this.computerChoiceRock;
      this.tie = !this.tie;
      this.start = false;
      this.isDisabled = true;
    }

    if (this.random === 2) {
      this.computerChoicePaper = !this.computerChoicePaper;
      this.loser = !this.loser;
      this.start = false;
      this.isDisabled = true;
    }

    if (this.random === 3) {
      this.computerChoiceScissors = !this.computerChoiceScissors;
      this.winner = !this.winner;
      this.start = false;
      this.isDisabled = true;
    }
  }

  paper() {
    if (this.random === 1) {
      this.computerChoiceRock = !this.computerChoiceRock;
      this.winner = !this.winner;
      this.start = false;
      this.isDisabled = true;
    }

    if (this.random === 2) {
      this.computerChoicePaper = !this.computerChoicePaper;
      this.tie = !this.tie;
      this.start = false;
      this.isDisabled = true;
    }

    if (this.random === 3) {
      this.computerChoiceScissors = !this.computerChoiceScissors;
      this.loser = !this.loser;
      this.start = false;
      this.isDisabled = true;
    }
  }

  scissors() {
    if (this.random === 1) {
      this.computerChoiceRock = !this.computerChoiceRock;
      this.loser = !this.loser;
      this.start = false;
      this.isDisabled = true;
    }

    if (this.random === 2) {
      this.computerChoicePaper = !this.computerChoicePaper;
      this.winner = !this.winner;
      this.start = false;
      this.isDisabled = true;
    }

    if (this.random === 3) {
      this.computerChoiceScissors = !this.computerChoiceScissors;
      this.tie = !this.tie;
      this.start = false;
      this.isDisabled = true;
    }

  }

  restart() {
    this.computerChoiceRock = false;
    this.computerChoicePaper = false;
    this.computerChoiceScissors = false;
    this.winner = false;
    this.loser = false;
    this.tie = false;
    this.start = true;
    this.isDisabled = false;

  }
}









