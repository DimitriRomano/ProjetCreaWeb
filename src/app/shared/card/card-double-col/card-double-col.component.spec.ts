import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDoubleColComponent } from './card-double-col.component';

describe('CardDoubleColComponent', () => {
  let component: CardDoubleColComponent;
  let fixture: ComponentFixture<CardDoubleColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDoubleColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDoubleColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
