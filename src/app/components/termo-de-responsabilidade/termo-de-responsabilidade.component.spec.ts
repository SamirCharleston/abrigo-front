import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermoDeResponsabilidadeComponent } from './termo-de-responsabilidade.component';

describe('TermoDeResponsabilidadeComponent', () => {
  let component: TermoDeResponsabilidadeComponent;
  let fixture: ComponentFixture<TermoDeResponsabilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermoDeResponsabilidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermoDeResponsabilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
