import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaprincipalComponent } from './telaprincipal.component';

describe('TelaprincipalComponent', () => {
  let component: TelaprincipalComponent;
  let fixture: ComponentFixture<TelaprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
