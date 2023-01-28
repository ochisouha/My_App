import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapcontainerComponent } from './mapcontainer.component';

describe('MapcontainerComponent', () => {
  let component: MapcontainerComponent;
  let fixture: ComponentFixture<MapcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
