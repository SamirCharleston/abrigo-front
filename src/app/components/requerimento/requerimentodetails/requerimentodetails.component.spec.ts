import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimentodetailsComponent } from './requerimentodetails.component';

describe('RequerimentodetailsComponent', () => {
  let component: RequerimentodetailsComponent;
  let fixture: ComponentFixture<RequerimentodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequerimentodetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequerimentodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
