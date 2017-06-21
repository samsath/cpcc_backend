import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterdetailComponent } from './newsletterdetail.component';

describe('NewsletterdetailComponent', () => {
  let component: NewsletterdetailComponent;
  let fixture: ComponentFixture<NewsletterdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
