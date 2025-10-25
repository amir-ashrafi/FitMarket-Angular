import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { InformationMenuMain ,InformationItem  } from '../../../../type';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink , NgOptimizedImage],
  templateUrl: './navbar.html',
  styleUrls:['navbar.css']
})

export class Navbar {
isFocused = false;
isMenuOpen = false;
activeCategoryIndex = 0;
information_menu_main: InformationMenuMain[] = [
  {
    id:0,
    icon:"percent_discount",
    name:"شگفت انگیز ها",
    link:""
  },
    {
    id:1,
    icon:"local_fire_department",
    name:"پرفروش ترین ها",
    link:""
  },
  {
    id:2,
    icon:"contact_support",
    name:"سوالی دارید؟",
    link:""
  },
  {
    id:3,
    icon:"exercise",
    name:"فیت بلاگ",
    link:""
  }
]
infomation: InformationItem[] = [
  {
    id:0,
    name:'کفش ورزشی',
    category:'',
    childern:[
      {
        id:'0',
        name:'کفش مردانه',
        category:'',
        children:[
          {
            id:0,
            name:'کفش پیاده روی',
            category:''
          },
          {
            id:1,
            name:'کفش فوتسال',
            category:''
          },
          {
            id:2,
            name:'کفش فوتبال',
            category:''
          },
          {
            id:3,
            name:'کفش کوهنوردی / طبیعت گردی',
            category:''
          },
          {
            id:4,
            name:'کفش بسکتبال',
            category:''
          },
        ]
      },
      {
        id:'1',
        name:'کفش زنانه',
        category:'',
        children:[
          {
            id:0,
            name:'کفش پیاده روی',
            category:''
          },
          {
            id:1,
            name:'کفش فوتسال',
            category:''
          },
          {
            id:2,
            name:'کفش فوتبال',
            category:''
          },
          {
            id:3,
            name:'کفش کوهنوردی / طبیعت گردی',
            category:''
          },
          {
            id:4,
            name:'کفش بسکتبال',
            category:''
          },
        ]
      },
      {
        id:'2',
        name:'کفش بچه گانه',
        children:[
          {
            id:0,
            name:'کتانی رانینگ',
            category:''
          },
          {
            id:1,
            name:'کفش فوتسال',
            category:''
          },
          {
            id:2,
            name:'کفش فوتبال',
            category:''
          },
          {
            id:3,
            name:'کفش چمن مصنوعی',
            category:''
          },
          {
            id:4,
            name:'کفش والیبال',
            category:''
          },
          {
            id:5,
            name:'کفش بسکتبال',
            category:''
          }
        ]
      }
    ]
  },
  {
    id:1,
    name:'پوشاک ورزشی',
    category:'',
    childern:[
      {
        id:0,
        name:'پوشاک مردانه',
        category:'',
        children:[
          {
            id:0,
            name:'لباس تیم های باشگاهی',
            category:'',
          },
          {
            id:1,
            name:'گرمکن و شلوار باشگاهی',
            category:''
          },
          {
            id:2,
            name:'لباس تیمی',
            category:''
          },
          {
            id:3,
            name:'تیشرت',
            category:''
          },
          {
            id:4,
            name:'شورت ورزشی',
            category:''
          },
          {
            id:5,
            name:'هودی',
            category:''
          }
        ]
      },
      {
        id:1,
        name:'پوشاک زنانه',
        category:'',
        children:[
          {
            id:0,
            name:'لباس تیم های باشگاهی',
            category:'',
          },
          {
            id:1,
            name:'گرمکن و شلوار باشگاهی',
            category:''
          },
          {
            id:2,
            name:'لباس تیمی',
            category:''
          },
          {
            id:3,
            name:'نیم تنه زنانه',
            category:''
          },
          {
            id:4,
            name:'شورت ورزشی',
            category:''
          },
          {
            id:5,
            name:'تاپ زنانه',
            category:''
          }
        ]
      },
      {
        id:2,
        name:'پوشاک بچه گانه',
        category:'',
        children:[
          {
            id:0,
            name:'لباس باشگاهی',
            category:'',
          },
          {
            id:1,
            name:'گرمکن و شلوار باشگاهی',
            category:''
          },
          {
            id:2,
            name:'اکسسوری',
            category:''
          },
          {
            id:3,
            name:'دستکش',
            category:''
          },
          {
            id:4,
            name:'جوراب',
            category:''
          },
          {
            id:5,
            name:'آرنج بند',
            category:''
          },
          {
            id:5,
            name:'مچ بند',
            category:''
          },
        ]
      }
    ]
  },
  {
    id:2,
    name:'تجهیزات ورزشی',
    category:'',
    childern:[
      {
        id:0,
        name:'لوازم تمرینی',
        category:'',
        children:[
          {
            id:0,
            name:'کیف حمل کفش جدید',
            category:'',
          },
          {
            id:1,
            name:'جوراب',
            category:''
          },
          {
            id:2,
            name:'قلم بند',
            category:''
          },
          {
            id:3,
            name:'تندیس / جام',
            category:''
          },
          {
            id:4,
            name:'لوازم تمرینی/بدنسازی',
            category:''
          },
          {
            id:5,
            name:'ایروبیک و تناسب اندام',
            category:''
          }
        ]
      },
      {
        id:1,
        name:'لوازم شنا',
        category:'',
        children:[
          {
            id:0,
            name:'کلاه شنا',
            category:'',
          },
          {
            id:1,
            name:'عینک شنا',
            category:''
          },
        ]
      },
      {
        id:2,
        name:'کیف و کوله ورزشی',
        category:'',
        children:[
          {
            id:0,
            name:'کیف و کوله مردانه',
            category:'',
          },
          {
            id:1,
            name:'کیف و کوله زنانه',
            category:''
          },
          {
            id:2,
            name:'وسایل هواداری',
            category:''
          },
        ]
      }
    ]
  },
    {
    id:3,
    name:'مکمل بدنسازی',
    category:'',
    childern:[
      {
        id:0,
        name:'پروتئین بدنسازی',
        category:'',
        children:[
          {
            id:0,
            name:'پروتئین وی',
            category:'',
          },
          {
            id:1,
            name:'پروتئین کازئین',
            category:''
          },
          {
            id:2,
            name:'پروتئین ایزوله',
            category:''
          },
          {
            id:3,
            name:'پروتئین گیاهی',
            category:''
          },
          {
            id:4,
            name:'گینر (افزایش وزن)',
            category:''
          },
          {
            id:5,
            name:'کراتین',
            category:''
          },
          {
            id:6,
            name:'گلوتامین',
            category:''
          },
          {
            id:7,
            name:'سی ال ای | CLA',
            category:''
          },
          {
            id:8,
            name:'اچ ام بی | HMB',
            category:''
          }
        ]
      },
      {
        id:1,
        name:'ویتامین ها و مواد معدنی',
        category:'',
        children:[
          {
            id:0,
            name:'مولتی ویتامین',
            category:'',
          },
          {
            id:1,
            name:'ویتامین آ (A)',
            category:''
          },
           {
            id:2,
            name:'ویتامین دی (D)',
            category:'',
          },
          {
            id:3,
            name:'ویتامین ث (C)',
            category:''
          },
          {
            id:4,
            name:'ویتامین ای (E)',
            category:''
          },
          {
            id:5,
            name:'زینک و زینک پلاس',
            category:''
          },
          {
            id:6,
            name:'منیزیم',
            category:''
          },

        ]
      },
      {
        id:2,
        name:'مکمل های تخصصی',
        category:'',
        children:[
          {
            id:0,
            name:'پوست، مو و ناخن',
            category:'',
          },
          {
            id:1,
            name:'تقویت سیستم ایمنی',
            category:''
          },
          {
            id:2,
            name:'کبد و صفرا',
            category:''
          },
          {
            id:3,
            name:'تقویت سیستم عصبی',
            category:'',
          },
          {
            id:4,
            name:'افزاینده تستسترون',
            category:''
          },
          {
            id:5,
            name:'بهبود کم خونی',
            category:''
          },
        ]
      }
    ]
  }
]
get activeCategory(){
  return this.infomation[this.activeCategoryIndex]
}
openMenu(){
  this.isMenuOpen = true
}
closeMenu(){
  this.isMenuOpen = false
}
setActiveCategory(index:number){
  this.activeCategoryIndex = index
}
}
