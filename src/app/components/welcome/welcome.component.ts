import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ENTER_GAME } from 'src/app/constants/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Output()
  enterGameEmitter = new EventEmitter();

  ENTER_GAME = ENTER_GAME;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.enterGameEmitter.emit();
    console.log('进入游戏');
  }
}
