import { SUBMIT } from './constants/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameOpen = true;
  displayDialog = false;

  SUBMIT = SUBMIT;

  startGame() {
    this.gameOpen = true;
  }

  toggleDialog() {
    this.displayDialog = !this.displayDialog;
  }
}
