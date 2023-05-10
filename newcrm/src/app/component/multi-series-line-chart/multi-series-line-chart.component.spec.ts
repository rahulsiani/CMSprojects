import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSeriesLineChartComponent } from './multi-series-line-chart.component';

describe('MultiSeriesLineChartComponent', () => {
  let component: MultiSeriesLineChartComponent;
  let fixture: ComponentFixture<MultiSeriesLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSeriesLineChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSeriesLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
