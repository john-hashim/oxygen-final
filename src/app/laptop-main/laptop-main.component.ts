import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop-main',
  templateUrl: './laptop-main.component.html',
  styleUrls: ['./laptop-main.component.scss']
})
export class LaptopMainComponent implements OnInit {

  constructor() { }
  public washingmachines = [
    { brand: 'IFB', details: '8kg f/l Washing Machine ',  offer: '../../assets/OFF/1.png', emi: '../../assets/emi/EMI-01.png', img: '../../assets/washingmachinepng/ifb8kg-removebg-preview.png' },
    { brand: 'IFB', details: '6.5kg Top-lod Washing Machine', offer: '../../assets/OFF/1.png',emi: '../../assets/emi/EMI-01.png', img: '../../assets/washingmachinepng/ifb_6.5_top-removebg-preview.png'},
    { brand: 'IFB', details: '6 kg f/l Washing Machine',  offer: '../../assets/OFF/1.png', emi: '../../assets/emi/EMI-01.png', img: '../../assets/washingmachinepng/ifg_6kg-removebg-preview.png'},
    { brand: 'LLOYED', details: '6.5kg semi Washing Machine',  offer: '../../assets/OFF/1.png', emi: '../../assets/emi/EMI-01.png', img: '../../assets/washingmachinepng/lloyed-removebg-preview.png' },
    { brand: 'SAMSUNG', details: '6 kg f/l Washing Machine', offer: '../../assets/OFF/1.png', emi: '../../assets/emi/EMI-01.png', img: '../../assets/washingmachinepng/samsung-removebg-preview.png'},
    { brand: 'WHIRLPOOL', details: '7.5kg semi Washing Machiner',  offer: '../../assets/OFF/1.png', emi: '../../assets/emi/EMI-01.png', img: '../../assets/washingmachinepng/whirlpool7.5-removebg-preview.png' },
    {brand: 'WHIRLPOOL', details: '6.5kg semi Washing Machine',  offer: '../../assets/OFF/1.png', emi:'../../assets/emi/EMI-01.png', img: '../../assets/washingmachinepng/whirlpool_6.5_semi-removebg-preview.png'},
    {brand: 'WHIRPOOL', details: '6.5kg Top Washing Machine', offer: '../../assets/OFF/1.png', emi: '../../assets/emi/EMI-01.png', img: '../../assets/washingmachinepng/whirlpool_6.5_top-removebg-preview.png'},
    { brand: 'WHIRLPOOL', details: '6kg Top Washing Machine',  offer: '../../assets/OFF/1.png', emi: '../../assets/emi/EMI-01.png', img: '../../assets/washingmachinepng/whirlpool_6_top-removebg-preview.png' }
  ]
  
  ngOnInit(): void {
  }

}
