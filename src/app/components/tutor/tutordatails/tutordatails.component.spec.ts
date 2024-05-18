import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutordatailsComponent } from './tutordatails.component';

describe('TutordatailsComponent', () => {
  let component: TutordatailsComponent;
  let fixture: ComponentFixture<TutordatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutordatailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutordatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
