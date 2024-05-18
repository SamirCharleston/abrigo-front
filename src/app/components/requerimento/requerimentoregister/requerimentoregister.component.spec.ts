import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimentoregisterComponent } from './requerimentoregister.component';

describe('RequerimentoregisterComponent', () => {
  let component: RequerimentoregisterComponent;
  let fixture: ComponentFixture<RequerimentoregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequerimentoregisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequerimentoregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
