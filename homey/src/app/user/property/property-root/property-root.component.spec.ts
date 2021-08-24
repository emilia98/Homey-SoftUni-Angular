import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyRootComponent } from './property-root.component';

describe('PropertyRootComponent', () => {
  let component: PropertyRootComponent;
  let fixture: ComponentFixture<PropertyRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
