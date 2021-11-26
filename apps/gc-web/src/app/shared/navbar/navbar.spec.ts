import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBar } from './navbar';

describe('Navbar', () => {
  let component: NavBar;
  let fixture: ComponentFixture<NavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBar ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
