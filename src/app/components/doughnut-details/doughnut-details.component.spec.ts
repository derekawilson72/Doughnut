import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutDetailsComponent } from './doughnut-details.component';

describe('DoughnutDetailsComponent', () => {
  let component: DoughnutDetailsComponent;
  let fixture: ComponentFixture<DoughnutDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughnutDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoughnutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
