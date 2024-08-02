import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptingInputComponent } from './accepting-input.component';

describe('AcceptingInputComponent', () => {
  let component: AcceptingInputComponent;
  let fixture: ComponentFixture<AcceptingInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptingInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceptingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
