import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public linkRow1 = [
    {name: 'Mobile', url: '/mobile'},
    {name: 'Refrigerators', url: '/refrigerators'},
    {name: 'Air Conditioners', url: '/airconditioners'},
    {name: 'Accessories', url: '/accessories'}
  ]

  public linkRow2 = [
    {name: 'Laptop', url: '/laptop'},
    {name: 'Washing Machine', url: '/washingmachine'},
    {name: 'LED TV', url: '/ledtv'},
    {name: 'Small Aplliances', url: '/smallappliances'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
