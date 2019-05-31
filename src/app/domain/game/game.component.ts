import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output()
  displayDialogEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  displayDialog() {
    this.displayDialogEmitter.emit();
  }
}
