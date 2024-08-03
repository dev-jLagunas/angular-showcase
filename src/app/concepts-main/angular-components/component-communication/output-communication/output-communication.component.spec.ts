import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputCommunicationComponent } from './output-communication.component';

describe('OutputCommunicationComponent', () => {
  let component: OutputCommunicationComponent;
  let fixture: ComponentFixture<OutputCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputCommunicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutputCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
