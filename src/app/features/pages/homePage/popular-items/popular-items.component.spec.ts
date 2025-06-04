import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularItemsComponent } from './popular-items.component';

describe('PopularItemsComponent', () => {
  let component: PopularItemsComponent;
  let fixture: ComponentFixture<PopularItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
