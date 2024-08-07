import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostDecoratorsComponent } from './host-decorators.component';

describe('HostDecoratorsComponent', () => {
  let component: HostDecoratorsComponent;
  let fixture: ComponentFixture<HostDecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostDecoratorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
