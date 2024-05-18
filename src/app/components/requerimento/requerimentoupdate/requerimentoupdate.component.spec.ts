import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimentoupdateComponent } from './requerimentoupdate.component';

describe('RequerimentoupdateComponent', () => {
  let component: RequerimentoupdateComponent;
  let fixture: ComponentFixture<RequerimentoupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequerimentoupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequerimentoupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
