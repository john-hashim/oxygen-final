import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-main',
  templateUrl: './mobile-main.component.html',
  styleUrls: ['./mobile-main.component.scss']
})
export class MobileMainComponent implements OnInit {

  public mobiles = [
    { brand: 'Samsung', model: 'A71', price: '31,200', offer: 28080, discount: '10%', emi: '4,680', img: '../assets/mobile/redmi1.png' },
    { brand: 'Samsung', model: 'A51', price: '21,200' },
    { brand: 'Samsung', model: 'M31s', price: '19,200' },
    { brand: 'Realme', model: '6i', price: '12,000' },
    { brand: 'Realme', model: 'C11', price: '8000' },
    { brand: 'Realme', model: 'X2', price: '20,000' },
    { brand: 'Nokia', model: '6.1', price: 17200 },
    { brand: 'Xiaomi', model: 'Note 9', price: 14000 },
    { brand: 'Xiaomi', model: 'Note 8 Pro', price: 17000 },
    { brand: 'Xiaomi', model: 'Mi A3', price: 13000 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
