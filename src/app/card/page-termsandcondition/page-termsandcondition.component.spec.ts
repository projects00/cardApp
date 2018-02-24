import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTermsandconditionComponent } from './page-termsandcondition.component';

describe('PageTermsandconditionComponent', () => {
  let component: PageTermsandconditionComponent;
  let fixture: ComponentFixture<PageTermsandconditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTermsandconditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTermsandconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
