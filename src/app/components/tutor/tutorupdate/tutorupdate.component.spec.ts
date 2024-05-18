import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorupdateComponent } from './tutorupdate.component';

describe('TutorupdateComponent', () => {
  let component: TutorupdateComponent;
  let fixture: ComponentFixture<TutorupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
