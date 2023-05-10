import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolfeeComponent } from './schoolfee/schoolfee.component';

const routes: Routes = [
  {'path': 'dashboard', component: DashboardComponent},
  {'path': 'analytics', component: AnalyticsComponent},
  //{'path': 'fee', component: SchoolfeeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllcomponentRoutingModule { }
