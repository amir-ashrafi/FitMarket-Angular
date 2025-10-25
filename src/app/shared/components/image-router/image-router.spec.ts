import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRouter } from './image-router';

describe('ImageRouter', () => {
  let component: ImageRouter;
  let fixture: ComponentFixture<ImageRouter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageRouter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageRouter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
