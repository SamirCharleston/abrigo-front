import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachorroupdateComponent } from './cachorroupdate.component';

describe('CachorroupdateComponent', () => {
  let component: CachorroupdateComponent;
  let fixture: ComponentFixture<CachorroupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CachorroupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CachorroupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
