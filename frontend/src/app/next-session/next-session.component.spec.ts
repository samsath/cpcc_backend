import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextSessionComponent } from './next-session.component';

describe('NextSessionComponent', () => {
  let component: NextSessionComponent;
  let fixture: ComponentFixture<NextSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
