import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ref-main',
  templateUrl: './ref-main.component.html',
  styleUrls: ['./ref-main.component.scss']
})
export class RefMainComponent implements OnInit {

  constructor() { }
  public fridges = [
    {brand: '../../assets/logo/samsung-white-logo.png', ltr: '244 LTR 3 STAR', cat: 'DOUBLE DOOR', free: '', discount: "15%", emi: '2270' , img: '../../assets/refrigeratorpng/samsung244L_3star-removebg-preview.png' },
    {brand: '../../assets/logo/samsung-white-logo.png', ltr: '198 LTR 4 STAR', cat: 'SINGLE DOOR', free: '', discount: "25%", emi: '1191',img:'../../assets/refrigeratorpng/samsung198L_4star-removebg-preview.png'},
    {brand: '../../assets/logo/samsung-white-logo.png', ltr: '198 LTR 3 STAR', cat: 'SINGLE DOOR', free: '', discount: "21%", emi: '1179',img:'../../assets/refrigeratorpng/samsung198L_3star-removebg-preview.png'},
    {brand: '../../assets/logo/samsung-white-logo.png', ltr: '253 LTR 3 STAR', cat: 'DOUBLE DOOR', free: '', discount: "18%", emi: '2179',img:'../../assets/refrigeratorpng/samsung198L_3star-removebg-preview.png'},
    {brand: '../../assets/logo/Whirlpool-logo-2016_now-removebg-preview.png', ltr: '677 LTR', cat: 'SBS', free: 'TIMEX WATCH', discount: "38%", emi: '7000',img:'../../assets/refrigeratorpng/whirlpool_667-removebg-preview.png'},
    {brand: '../../assets/logo/Whirlpool-logo-2016_now-removebg-preview.png', ltr: '265 LTR 3 STAR', cat: 'DOUBLE DOOR', free: 'portico bed sheet', discount: "21%", emi: '2179',img:'../../assets/refrigeratorpng/whirlpool_256_L_3_star_-removebg-preview.png' },
    {brand: '../../assets/logo/Whirlpool-logo-2016_now-removebg-preview.png', ltr: '185 LTR 4 STAR', cat: 'SINGLE DOOR', free: 'borosil lunch box', discount: "18%", emi: '1300',img:'../../assets/refrigeratorpng/whirlpool_185_L_4_star-removebg-preview.png'},
    {brand: '../../assets/logo/lg-removebg-preview.png', ltr: '190 LTR 4 STAR', cat: 'SINGLE DOOR', free: '', discount: "7%", emi: '1354',img:'../../assets/refrigeratorpng/LG_190_L_4_star-removebg-preview.png' },
    {brand: '../../assets/logo/godrej-removebg-preview.png', ltr: '231 LTR 2 STAR', cat: 'DOUBLE DOOR', free: '', discount: "19%", emi: '1575',img:'../../assets/refrigeratorpng/Godrej_231_l_2_star-removebg-preview.png'},
    {brand: 'Mr LIGHT', ltr: '252 LTR 2 STAR', cat: 'DOUBLE DOOR', free: '', discount: "26%", emi: '1854',img:'../../assets/refrigeratorpng/LLoyed_252_liter_2_star-removebg-preview.png'}
  ]

  ngOnInit(): void {
  }

}
