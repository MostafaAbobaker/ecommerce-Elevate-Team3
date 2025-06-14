import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialGiftsComponent } from './special-gifts.component';

describe('SpecialGiftsComponent', () => {
  let component: SpecialGiftsComponent;
  let fixture: ComponentFixture<SpecialGiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialGiftsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
