import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-image-router',
  imports: [],
  templateUrl: './image-router.html',
  styleUrl: './image-router.css'
})
export class ImageRouter {
  @Input() images:{id:number,name:string}[]= [];
  @Input() intervalMs = 2000; // تغییر هر 2 ثانیه (قابل تغییر)
@Input() class = ''
  currentIndex = 0;
  private sub?: Subscription;
  paused = false;
trackById(index: number, item: {id:number,name:string}) {
  return item.id;
}
  ngOnInit(): void {
    if (this.images.length > 1) {
      this.startLoop();
    }
  }

  startLoop() {
    this.sub = interval(this.intervalMs).subscribe(() => {
      if (!this.paused) this.nextImage();
    });
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length; // لوپ بینهایت
  }

  goToImage(index: number) {
    this.currentIndex = index;
  }

  @HostListener('mouseenter') onEnter() {
    this.paused = true;
  }

  @HostListener('mouseleave') onLeave() {
    this.paused = false;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
