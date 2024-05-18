import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachorrodetailsComponent } from './cachorrodetails.component';

describe('CachorrodetailsComponent', () => {
  let component: CachorrodetailsComponent;
  let fixture: ComponentFixture<CachorrodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CachorrodetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CachorrodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
