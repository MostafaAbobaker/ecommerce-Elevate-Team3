import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCoverComponent } from './auth-cover.component';

describe('AuthCoverComponent', () => {
  let component: AuthCoverComponent;
  let fixture: ComponentFixture<AuthCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthCoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
