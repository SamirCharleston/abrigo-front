import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimentolistComponent } from './requerimentolist.component';

describe('RequerimentolistComponent', () => {
  let component: RequerimentolistComponent;
  let fixture: ComponentFixture<RequerimentolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequerimentolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequerimentolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
