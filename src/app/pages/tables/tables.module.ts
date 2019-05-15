import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { JobTableComponent } from './job-table/job-table.component';
import {JobTabService} from '../../Services/job/job-tab.service';

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    JobTableComponent,
  ],
  providers: [
    JobTabService
  ],
})
export class TablesModule { }
