import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesdetailComponent } from './articlesdetail.component';

describe('ArticlesdetailComponent', () => {
  let component: ArticlesdetailComponent;
  let fixture: ComponentFixture<ArticlesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
