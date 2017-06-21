import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaplistItemComponent } from './maplist-item.component';

describe('MaplistItemComponent', () => {
  let component: MaplistItemComponent;
  let fixture: ComponentFixture<MaplistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaplistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaplistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
