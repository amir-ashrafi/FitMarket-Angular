import { Component, Input, OnInit, OnDestroy, HostListener, ChangeDetectorRef } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-image-router',
  templateUrl: './image-router.html',
  styleUrls: ['./image-router.css']
})
export class ImageRouter implements OnInit, OnDestroy {
  @Input() images: { id: number; name: string }[] = [];
  @Input() intervalMs = 2000;
  @Input() class = '';

  currentIndex = 0;
  private sub?: Subscription;
  paused = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.images.length > 1) {
      this.startLoop();
    }
  }

  startLoop() {
    this.sub = interval(this.intervalMs).subscribe(() => {
      if (!this.paused) {
        this.nextImage();
      }
    });
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.cdr.markForCheck();
  }

  goToImage(index: number) {
    this.currentIndex = index;
    this.cdr.markForCheck(); 
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
