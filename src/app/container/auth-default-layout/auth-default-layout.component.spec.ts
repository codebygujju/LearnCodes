import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDefaultLayoutComponent } from './auth-default-layout.component';

describe('AuthDefaultLayoutComponent', () => {
  let component: AuthDefaultLayoutComponent;
  let fixture: ComponentFixture<AuthDefaultLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthDefaultLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthDefaultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
