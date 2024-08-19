import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildyourpizzaComponent } from './buildyourpizza.component';

describe('BuildyourpizzaComponent', () => {
  let component: BuildyourpizzaComponent;
  let fixture: ComponentFixture<BuildyourpizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildyourpizzaComponent]
    });
    fixture = TestBed.createComponent(BuildyourpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
