import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ref-main',
  templateUrl: './ref-main.component.html',
  styleUrls: ['./ref-main.component.scss']
})
export class RefMainComponent implements OnInit {

  constructor() { }
  public fridges = [
    {brand: 'SAMSUNG', ltr: '244 LTR 3 STAR', cat: 'DOUBLE DOOR', free: '', discount: 15, emi: '' , img: '' },
    {brand: 'SAMSUNG', ltr: '198 LTR 4 STAR', cat: 'SINGLE DOOR', free: '', discount: 25, emi: '',img:''},
    {brand: 'SAMSUNG', ltr: '198 LTR 3 STAR', cat: 'SINGLE DOOR', free: '', discount: 21, emi: '',img:''},
    {brand: 'SAMSUNG', ltr: '253 LTR 3 STAR', cat: 'DOUBLE DOOR', free: '', discount: 18, emi: ''},
    {brand: 'WHIRLPOOL', ltr: '677 LTR', cat: 'SBS', free: 'TIMEX WATCH', discount: 38, emi: '',img:''},
    {brand: 'WHIRLPOOL', ltr: '265 LTR 3 STAR', cat: 'DOUBLE DOOR', free: 'portico bed sheet', discount: 21, emi: '',img:'' },
    {free:'borosil lunch box',ltr:'185L 4star Refrigerator',emi:'', brand: 'WHIRLPOOL', discount: '',img:''},
    {brand: 'WHIRLPOOL', ltr: '185 LTR 4 STAR', cat: 'SINGLE DOOR', free: 'borosil lunch box', discount: 18, emi: ''},
    {brand: 'LG', ltr: '190 LTR 4 STAR', cat: 'SINGLE DOOR', free: '', discount: 7, emi: '',img:'' },
    {brand: 'GODREJ', ltr: '231 LTR 2 STAR', cat: 'DOUBLE DOOR', free: '', discount: 19, emi: '',img:''},
    {brand: 'LLOYD', ltr: '252 LTR 2 STAR', cat: 'DOUBLE DOOR', free: '', discount: 26, emi: '',img:''}
  ]

  ngOnInit(): void {
  }

}
