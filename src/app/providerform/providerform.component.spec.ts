import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderformComponent } from './providerform.component';

describe('ProviderformComponent', () => {
  let component: ProviderformComponent;
  let fixture: ComponentFixture<ProviderformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
