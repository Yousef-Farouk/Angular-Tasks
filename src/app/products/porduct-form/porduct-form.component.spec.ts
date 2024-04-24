import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductFormComponent } from './porduct-form.component';

describe('PorductFormComponent', () => {
  let component: PorductFormComponent;
  let fixture: ComponentFixture<PorductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorductFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
