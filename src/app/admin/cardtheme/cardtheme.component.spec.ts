import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardthemeComponent } from './cardtheme.component';

describe('CardthemeComponent', () => {
  let component: CardthemeComponent;
  let fixture: ComponentFixture<CardthemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardthemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
