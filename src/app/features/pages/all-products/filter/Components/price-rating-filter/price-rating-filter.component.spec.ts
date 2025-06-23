import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRatingFilterComponent } from './price-rating-filter.component';

describe('PriceRatingFilterComponent', () => {
  let component: PriceRatingFilterComponent;
  let fixture: ComponentFixture<PriceRatingFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceRatingFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceRatingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
