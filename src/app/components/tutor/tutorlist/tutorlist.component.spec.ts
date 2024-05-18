import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorlistComponent } from './tutorlist.component';

describe('TutorlistComponent', () => {
  let component: TutorlistComponent;
  let fixture: ComponentFixture<TutorlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
