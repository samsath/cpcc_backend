import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareItemComponent } from './square-item.component';

describe('SquareItemComponent', () => {
  let component: SquareItemComponent;
  let fixture: ComponentFixture<SquareItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
