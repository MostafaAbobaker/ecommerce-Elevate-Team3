import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBtnComponent } from './auth-btn.component';

describe('AuthBtnComponent', () => {
  let component: AuthBtnComponent;
  let fixture: ComponentFixture<AuthBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
