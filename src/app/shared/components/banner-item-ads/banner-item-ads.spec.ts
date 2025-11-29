import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerItemAds } from './banner-item-ads';

describe('BannerItemAds', () => {
  let component: BannerItemAds;
  let fixture: ComponentFixture<BannerItemAds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerItemAds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerItemAds);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
