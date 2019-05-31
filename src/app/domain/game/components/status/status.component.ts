import { Component, OnInit } from '@angular/core';
import { USER_STATUS } from 'src/app/constants/game-constants';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  
  
  USER_STATUS = USER_STATUS;

  private cash = 2000;
  private balance = 0;
  private debt = 5500;
  private health = 100;
  private reputation = 100;

  constructor() { }

  ngOnInit() {
  }

}
