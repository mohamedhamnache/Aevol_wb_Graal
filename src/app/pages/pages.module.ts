import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { StatisticsModule } from './statistics/statistics.module';
import { CampaignComponent } from './campaign/campaign.component';


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule, 
    ECommerceModule,
    
    StatisticsModule
    
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    CampaignComponent,
   
  ],
})
export class PagesModule {
}
