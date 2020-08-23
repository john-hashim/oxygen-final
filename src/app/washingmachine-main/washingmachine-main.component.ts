import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-washingmachine-main',
  templateUrl: './washingmachine-main.component.html',
  styleUrls: ['./washingmachine-main.component.scss']
})
export class WashingmachineMainComponent implements OnInit {

  constructor() { }
  public wm = [
    { brand: '../../assets/logo/IFB.png', details: '8kg f/l Washing Machine ',  offer: '13%', emi: '2958', img: '../../assets/washingmachinepng/ifb8kg-removebg-preview.png' },
    { brand: '../../assets/logo/IFB.png', details: '6.5kg Top-lod Washing Machine', offer: '13%',emi: '1408', img: '../../assets/washingmachinepng/ifb_6.5_top-removebg-preview.png'},
    { brand: '../../assets/logo/IFB.png', details: '6 kg f/l Washing Machine',  offer: '11%', emi: '1875', img: '../../assets/washingmachinepng/ifg_6kg-removebg-preview.png'},
    { brand: '../../assets/logo/lloyed-logo.png', details: '6.5kg semi Washing Machine',  offer: '21%', emi: '666', img: '../../assets/washingmachinepng/lloyed-removebg-preview.png' },
    { brand: '../../assets/logo/samsung-white-logo.png', details: '6 kg f/l Washing Machine', offer: '22%', emi: '2025', img: '../../assets/washingmachinepng/samsung-removebg-preview.png'},
    { brand: '../../assets/logo/Whirlpool-logo-2016_now-removebg-preview.png', details: '7.5kg semi Washing Machiner',  offer: '11%', emi: '908', img: '../../assets/washingmachinepng/whirlpool7.5-removebg-preview.png' },
    {brand: '../../assets/logo/Whirlpool-logo-2016_now-removebg-preview.png', details: '6.5kg semi Washing Machine',  offer: '10%', emi:'784', img: '../../assets/washingmachinepng/whirlpool_6.5_semi-removebg-preview.png'},
    {brand: '../../assets/logo/Whirlpool-logo-2016_now-removebg-preview.png', details: '6.5kg Top Washing Machine', offer: '17%', emi: '1234', img: '../../assets/washingmachinepng/whirlpool_6.5_top-removebg-preview.png'},
    { brand: '../../assets/logo/Whirlpool-logo-2016_now-removebg-preview.png', details: '6kg Top Washing Machine',  offer: '25%', emi: '1082', img: '../../assets/washingmachinepng/whirlpool_6kg-removebg-preview.png' },
    { brand: 'MrLight', details: '6.2kg semi Washing Machine',  offer: '22%', emi: '', img: '../../assets/washingmachinepng/mr_light-removebg-preview.png' }
  ]

  ngOnInit(): void {
  }

}
