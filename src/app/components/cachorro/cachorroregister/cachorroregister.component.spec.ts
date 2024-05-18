import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachorroregisterComponent } from './cachorroregister.component';

describe('CachorroregisterComponent', () => {
  let component: CachorroregisterComponent;
  let fixture: ComponentFixture<CachorroregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CachorroregisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CachorroregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
