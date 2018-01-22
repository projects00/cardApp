import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivecardComponent } from './activecard.component';

describe('ActivecardComponent', () => {
  let component: ActivecardComponent;
  let fixture: ComponentFixture<ActivecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
