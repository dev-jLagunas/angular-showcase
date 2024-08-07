import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostElementsOverviewComponent } from './host-elements-overview.component';

describe('HostElementsOverviewComponent', () => {
  let component: HostElementsOverviewComponent;
  let fixture: ComponentFixture<HostElementsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostElementsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostElementsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
