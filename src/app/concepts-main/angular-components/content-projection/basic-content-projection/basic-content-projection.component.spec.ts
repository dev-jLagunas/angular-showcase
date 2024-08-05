import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicContentProjectionComponent } from './basic-content-projection.component';

describe('BasicContentProjectionComponent', () => {
  let component: BasicContentProjectionComponent;
  let fixture: ComponentFixture<BasicContentProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicContentProjectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
