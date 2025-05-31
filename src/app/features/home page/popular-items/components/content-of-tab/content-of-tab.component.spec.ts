import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOfTabComponent } from './content-of-tab.component';

describe('ContentOfTabComponent', () => {
  let component: ContentOfTabComponent;
  let fixture: ComponentFixture<ContentOfTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentOfTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentOfTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
