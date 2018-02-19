import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFaqsComponent } from './page-faqs.component';

describe('PageFaqsComponent', () => {
  let component: PageFaqsComponent;
  let fixture: ComponentFixture<PageFaqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFaqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
