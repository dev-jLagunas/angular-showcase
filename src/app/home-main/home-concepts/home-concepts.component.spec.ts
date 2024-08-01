import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConceptsComponent } from './home-concepts.component';

describe('HomeConceptsComponent', () => {
  let component: HomeConceptsComponent;
  let fixture: ComponentFixture<HomeConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeConceptsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
