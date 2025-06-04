import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDataComponent } from './tab-data.component';

describe('TabDataComponent', () => {
  let component: TabDataComponent;
  let fixture: ComponentFixture<TabDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
