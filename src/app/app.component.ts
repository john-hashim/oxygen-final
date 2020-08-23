import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oxygen';
  public fridges = [
    {brand: 'SAMSUNG', ltr: '244 LTR 3 STAR', cat: 'DOUBLE DOOR', free: '', price: '', offer: '../../assets/OFF/1.png', discount: 15, emi: 'haii', img: 'https://rukminim1.flixcart.com/image/416/416/k4ss2a80/refrigerator-new/j/e/5/rt28t3483s8-hl-3-samsung-original-imafnmkcmpkystvh.jpeg?q=70' },
    {brand: 'SAMSUNG', ltr: '198 LTR 4 STAR', cat: 'SINGLE DOOR', free: '', price: '', offer: '../../assets/OFF/1.png', discount: 25, emi: '../../assets/emi/EMI-01.png',img:'https://rukminim1.flixcart.com/image/416/416/k8ytaq80/refrigerator-new/s/j/2/rr21t2h2x9u-hl-4-samsung-original-imafquvztzbyynme.jpeg?q=70'},
    {brand: 'SAMSUNG', ltr: '198 LTR 3 STAR', cat: 'SINGLE DOOR', free: '', price: '', offer: '../../assets/OFF/1.png', discount: 21, emi: '../../assets/emi/EMI-01.png',img:'https://assetscdn1.paytm.com/images/catalog/product/L/LA/LARSAMSUNG-192-CRAZ802133C18F2FA6/1592212529974_0.PNG?imwidth=282&impolicy=hq'},
    {brand: 'SAMSUNG', ltr: '253 LTR 3 STAR', cat: 'DOUBLE DOOR', free: '', price: '', offer: '../../assets/OFF/1.png', discount: 18, emi: '../../assets/emi/EMI-01.png'},
    {brand: 'WHIRLPOOL', ltr: '677 LTR', cat: 'SBS', free: 'TIMEX WATCH', price: '', offer: '../../assets/OFF/1.png', discount: 38, emi: '../../assets/emi/EMI-01.png',img:'https://images-na.ssl-images-amazon.com/images/I/71TqNhhSLyL._SL1500_.jpg'},
    {brand: 'WHIRLPOOL', ltr: '265 LTR 3 STAR', cat: 'DOUBLE DOOR', free: 'portico bed sheet', price: '', offer: '../../assets/OFF/1.png', discount: 21, emi: '../../assets/emi/EMI-01.png',img:'https://images-na.ssl-images-amazon.com/images/I/81%2BiizSOGbL._SY445_.jpg' },
    {free:'borosil lunch box',ltr:'185L 4star Refrigerator',emi:'../../assets/emi/EMI-01.png', brand: 'WHIRLPOOL', discount: '../../assets/OFF/1.png',img:'https://rukminim1.flixcart.com/image/416/416/k6jnfrk0/refrigerator-new/u/f/w/215-impc-prm-4s-inv-4-whirlpool-original-imafgxegjb3gczxh.jpeg?q=70'},
    {brand: 'WHIRLPOOL', ltr: '185 LTR 4 STAR', cat: 'SINGLE DOOR', free: 'borosil lunch box', price: '', offer: '../../assets/OFF/1.png', discount: 18, emi: '../../assets/emi/EMI-01.png'},
    {brand: 'LG', ltr: '190 LTR 4 STAR', cat: 'SINGLE DOOR', free: '', price: '', offer: '../../assets/OFF/1.png', discount: 7, emi: '../../assets/emi/EMI-01.png',img:'https://rukminim1.flixcart.com/image/416/416/k44hksw0/refrigerator-new/h/u/m/gl-b201apgy-5-lg-original-imafmxuxhvhv2wzz.jpeg?q=70' },
    {brand: 'GODREJ', ltr: '231 LTR 2 STAR', cat: 'DOUBLE DOOR', free: '', price: '', offer: '../../assets/OFF/1.png', discount: 19, emi: '../../assets/emi/EMI-01.png',img:'https://rukminim1.flixcart.com/image/416/416/kbb49zk0/refrigerator-new/9/7/z/rf-eon-245a-15-hf-si-st-1-godrej-original-imafszx7zwpgv63n.jpeg?q=70'},
    {brand: 'LLOYD', ltr: '252 LTR 2 STAR', cat: 'DOUBLE DOOR', free: '', price: '', offer: '../../assets/OFF/1.png', discount: 26, emi: '../../assets/emi/EMI-01.png',img:'https://rukminim1.flixcart.com/image/416/416/k0zlsi80/refrigerator-new/g/p/n/252cfds3mq-3-marq-by-flipkart-original-imafknnzmaubqzfp.jpeg?q=70'}
  ]
}
