import { SmartSliderComponent } from './../../shared/components/slider-component/slider-component';
import { ImageRouter } from './../../shared/components/image-router/image-router';
import { Component } from '@angular/core';
import { BannerItemAds } from '../../shared/components/banner-item-ads/banner-item-ads';

@Component({
  selector: 'app-home',
  imports: [ImageRouter, SmartSliderComponent, SmartSliderComponent,BannerItemAds],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
 banner_header = [
    {
      id:1,
      name:'/images/slide1.webp'
    },
    {
      id:2,
      name:'/images/slide2.webp'
    },
    {
      id:3,
      name:'/images/slide3.webp'
    },
    {
      id:4,
      name:'/images/slide4.webp'
    }
  ]
  banner_icon = [
    {
      id:0,
      icon:'swap_horizontal_circle',
      h1:'تعویض سایز',
      h6:'با خیال راحت خرید کنید',
    },
    {
      id:1,
      icon:'local_shipping',
      h1:'ارسال رایگان',
      h6:'ضمانت اصالت',
    },
    {
      id:2,
      icon:'task_alt',
      h1:'ضمانت اصالت',
      h6:'برای محصولات اورجینال',
    },
        {
      id:3,
      icon:'rocket_launch',
      h1:'ارسال سریع',
      h6:'۲۴ الی ۷۲ ساعت',
    },
        {
      id:4,
      icon:'history',
      h1:'ضمانت بازگشت',
      h6:'امکان بازگشت تا 7 روز',
    }
  ]
  item_suggestions:Item[] = [
    {
      id:0,
      src:"/images/icon-banner/Futsal.webp",
      name:"کفش فوتسال",
      href:"",
    },
    {
      id:1,
      src:"/images/icon-banner/recobi.webp",
      name:"لوازم فوتبال",
      href:""
    },
     {
      id:2,
      src:"/images/icon-banner/footbal.webp",
      name:"کفش چمن مصنوعی",
      href:"",
    },
   {
      id:3,
      src:"/images/icon-banner/warmup.webp",
      name:"گرم کن و شلوار",
      href:"",
    },
    {
      id:4,
      src:"/images/icon-banner/sports.webp",
      name:"کیف و کوله ورزشی",
      href:"",
    },
    {
      id:5,
      src:"/images/icon-banner/ball.webp",
      name:"توپ فوتبال",
      href:"",
    },
    {
      id:6,
      src:"/images/icon-banner/clothes-exercise.webp",
      name:"لباس تیم ها ",
      href:"",
    },
    {
      id:7,
      src:"/images/icon-banner/swiem.webp",
      name:"لوازم شنا",
      href:"",
    },

  ]
}

interface Item{
  id:number,
  src:string,
  name:string,
  href:string,
}
