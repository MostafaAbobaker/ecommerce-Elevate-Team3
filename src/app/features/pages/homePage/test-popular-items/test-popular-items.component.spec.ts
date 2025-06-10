import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPopularItemsComponent } from './test-popular-items.component';

describe('TestPopularItemsComponent', () => {
  let component: TestPopularItemsComponent;
  let fixture: ComponentFixture<TestPopularItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPopularItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPopularItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
