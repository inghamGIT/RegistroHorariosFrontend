import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosWeeklyComponent } from './registros-weekly.component';

describe('RegistrosWeeklyComponent', () => {
  let component: RegistrosWeeklyComponent;
  let fixture: ComponentFixture<RegistrosWeeklyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosWeeklyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
