import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CampaignComponent } from './campaign/campaign.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
    path: 'dashboard',
    component: ECommerceComponent,
  }, {
    path: 'simulations',
    component: DashboardComponent,
  },{
    path: 'statistics',
    component: StatisticsComponent,
  }, 
  {
    path: 'campaignSim',
    component: CampaignComponent,
  }, 
  {
    path: 'modal-overlays',
    loadChildren: './modal-overlays/modal-overlays.module#ModalOverlaysModule',
  },{
    path: 'bootstrap',
    loadChildren: './bootstrap/bootstrap.module#BootstrapModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  },  {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, 
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
