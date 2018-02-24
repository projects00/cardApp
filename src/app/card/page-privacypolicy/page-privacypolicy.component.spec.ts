import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrivacypolicyComponent } from './page-privacypolicy.component';

describe('PagePrivacypolicyComponent', () => {
  let component: PagePrivacypolicyComponent;
  let fixture: ComponentFixture<PagePrivacypolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePrivacypolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePrivacypolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
