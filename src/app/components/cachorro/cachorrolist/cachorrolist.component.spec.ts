import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachorrolistComponent } from './cachorrolist.component';

describe('CachorrolistComponent', () => {
  let component: CachorrolistComponent;
  let fixture: ComponentFixture<CachorrolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CachorrolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CachorrolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
