import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEssentialsComponent } from './component-essentials.component';

describe('ComponentEssentialsComponent', () => {
  let component: ComponentEssentialsComponent;
  let fixture: ComponentFixture<ComponentEssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentEssentialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
