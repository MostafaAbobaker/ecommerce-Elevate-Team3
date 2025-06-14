import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCardComponent } from './main-card.component';

describe('MainCardComponent', () => {
  let component: MainCardComponent;
  let fixture: ComponentFixture<MainCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
