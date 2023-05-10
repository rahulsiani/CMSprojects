import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AllcomponentRoutingModule } from './allcomponent-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { LayoutComponent } from './layout/layout.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { MultiSeriesLineChartComponent } from './multi-series-line-chart/multi-series-line-chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { BrushZoomComponent } from './brush-zoom/brush-zoom.component';
import { MaterialExampleModule } from 'src/material.module';
import { SchoolfeeComponent } from './schoolfee/schoolfee.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AnalyticsComponent,
    BarChartComponent,
    DonutChartComponent,
    MultiSeriesLineChartComponent,
    StackedBarChartComponent,
    BrushZoomComponent,
    SchoolfeeComponent,    
  ],
  imports: [
    CommonModule,
    AllcomponentRoutingModule,
    ToastrModule.forRoot(), // ToastrModule added
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,    
  ]
})
export class AllcomponentModule { }
