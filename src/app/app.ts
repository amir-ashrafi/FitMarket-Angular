import { Component, signal } from '@angular/core';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { ImageRouter } from './shared/components/image-router/image-router';

@Component({
  selector: 'app-root',
  imports: [Navbar,Footer,ImageRouter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  banner_header = [
    {
      id:0,
      name:'/images/slide1.webp'
    },
    {
      id:1,
      name:'/images/slide2.webp'
    },
    {
      id:2,
      name:'/images/slide3.webp'
    },
    {
      id:3,
      name:'/images/slide4.webp'
    }
  ]
}
