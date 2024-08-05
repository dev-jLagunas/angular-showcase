import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSlotsProjectionComponent } from './multiple-slots-projection.component';

describe('MultipleSlotsProjectionComponent', () => {
  let component: MultipleSlotsProjectionComponent;
  let fixture: ComponentFixture<MultipleSlotsProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleSlotsProjectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleSlotsProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
