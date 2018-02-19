import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDonateComponent } from './page-donate.component';

describe('PageDonateComponent', () => {
  let component: PageDonateComponent;
  let fixture: ComponentFixture<PageDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
