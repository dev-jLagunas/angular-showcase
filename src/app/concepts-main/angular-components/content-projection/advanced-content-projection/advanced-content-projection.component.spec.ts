import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedContentProjectionComponent } from './advanced-content-projection.component';

describe('AdvancedContentProjectionComponent', () => {
  let component: AdvancedContentProjectionComponent;
  let fixture: ComponentFixture<AdvancedContentProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedContentProjectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvancedContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
