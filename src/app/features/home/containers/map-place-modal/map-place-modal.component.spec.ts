import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPlaceModalComponent } from './map-place-modal.component';

describe('MapPlaceModalComponent', () => {
  let component: MapPlaceModalComponent;
  let fixture: ComponentFixture<MapPlaceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPlaceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPlaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
