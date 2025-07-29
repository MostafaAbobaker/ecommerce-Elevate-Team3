import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHeaderTitleComponent } from './form-header-title.component';

describe('FormHeaderTitleComponent', () => {
  let component: FormHeaderTitleComponent;
  let fixture: ComponentFixture<FormHeaderTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHeaderTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHeaderTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
