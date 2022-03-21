import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionChoicesComponent } from './connection-choices.component';

describe('ConnectionChoicesComponent', () => {
  let component: ConnectionChoicesComponent;
  let fixture: ComponentFixture<ConnectionChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionChoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
