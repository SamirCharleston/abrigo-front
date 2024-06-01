import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimentodeleteComponent } from './requerimentodelete.component';

describe('RequerimentodeleteComponent', () => {
  let component: RequerimentodeleteComponent;
  let fixture: ComponentFixture<RequerimentodeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequerimentodeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequerimentodeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
