import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-item-ads',
  imports: [],
  templateUrl: './banner-item-ads.html',
  styleUrl: './banner-item-ads.css'
})
export class BannerItemAds {
images = [
  {
    id:0,
    src:'/images/banner-ads/2.webp',
    class:'w-1/2 lg:p-3 p-2 '
  },
  {
    id:1,
    src:'/images/banner-ads/3.webp',
    class:'w-1/2 lg:p-3 p-2'
  },
  {
    id:2,
    src:'/images/banner-ads/6.png',
    class:'w-1/3 lg:p-3 p-2 '
  },
    {
    id:3,
    src:'/images/banner-ads/5.webp',
    class:'w-1/3 lg:p-3 p-2'
  },
  {
    id:4,
    src:'/images/banner-ads/7.png',
    class:'w-1/3 lg:p-3 p-2'
  }
]
}
