import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDotComponent } from './map-dot.component';

describe('MapDotComponent', () => {
  let component: MapDotComponent;
  let fixture: ComponentFixture<MapDotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapDotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
