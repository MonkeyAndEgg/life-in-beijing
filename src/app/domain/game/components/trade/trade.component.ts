import { BLACK_MARKET, HOME } from './../../../../constants/game-constants';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {
  @Output()
  displayDialogEmitter = new EventEmitter();

  sellingItems: Item[];
  userItems: Item[];

  HOME = HOME;
  BLACK_MARKET = BLACK_MARKET;

  constructor() { }

  ngOnInit() {
    this.sellingItems = [
      {
        name: '香烟',
        price: 20,
        totalNum: 8
      },
      {
        name: '上海小宝贝',
        price: 150,
        totalNum: 20
      }
    ];

    this.userItems = [];
  }

  purchase(item: Item) {
    console.log(item);
    this.userItems.push(item);
    this.displayDialogEmitter.emit();
  }

}
