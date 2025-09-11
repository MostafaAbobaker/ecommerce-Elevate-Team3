import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureAccessComponent } from './secure-access.component';

describe('SecureAccessComponent', () => {
  let component: SecureAccessComponent;
  let fixture: ComponentFixture<SecureAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecureAccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecureAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
