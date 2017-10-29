import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvetndetailComponent } from './evetndetail.component';

describe('EvetndetailComponent', () => {
  let component: EvetndetailComponent;
  let fixture: ComponentFixture<EvetndetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvetndetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvetndetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
