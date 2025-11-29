import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
  HostListener,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-slider-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-component.html',
styleUrls: ['./slider-component.css']
})

export class SmartSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() items: { id: number; name?: string; src?: string }[] = [];
  @Input() visibleCount = 6;
  @Input() step = 0.69;
  @Input() intervalMs = 3000;

  @ViewChild('viewport', { static: true }) viewport!: ElementRef<HTMLDivElement>;
  @ViewChild('track', { static: true }) track!: ElementRef<HTMLDivElement>;

  currentStart = 0;
  slideWidth = 0;
  animating = false;
  dir: 'left' | 'right' = 'right';
  private sub?: Subscription;
  paused = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.calculateSlideWidth();
    if (this.items.length > this.visibleCount) {
      this.startAuto();
    }
    this.cdr.detectChanges();
  }

  calculateSlideWidth() {
    const vp = this.viewport.nativeElement;
    this.slideWidth = vp.clientWidth / this.visibleCount;
  }

  startAuto() {
    this.sub = interval(this.intervalMs).subscribe(() => {
      if (!this.paused) this.next();
    });
  }

  stopAuto() {
    this.sub?.unsubscribe();
    this.sub = undefined;
  }

  next() {
    if (this.animating) return;
    this.dir = 'right';
    this.beginAnimate((this.currentStart + this.step) % this.items.length);
  }

  prev() {
    if (this.animating) return;
    this.dir = 'left';
    const n = (this.currentStart - this.step + this.items.length) % this.items.length;
    this.beginAnimate(n);
  }

  beginAnimate(newStart: number) {
    this.animating = true;
    this.currentStart = newStart;
    setTimeout(() => {
      this.animating = false;
      this.cdr.detectChanges();
    }, 600);
  }

  get translateX() {
    if (this.items.length <= this.visibleCount) return 0;
    return -this.currentStart * this.slideWidth;
  }

  trackById(index: number, item: any) {
    return item?.id ?? index;
  }

  goTo(index: number) {
    if (this.animating) return;
    this.beginAnimate(index % this.items.length);
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateSlideWidth();
  }

  @HostListener('mouseenter')
  onEnter() {
    this.paused = true;
  }
  @HostListener('mouseleave')
  onLeave() {
    this.paused = false;
  }

  ngOnDestroy() {
    this.stopAuto();
  }
}
