
import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import {StatisticsComponent} from './statistics.component'
import { ResultsComponent } from './results/results.component';

@NgModule({
 
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    StatisticsComponent,
    ResultsComponent
  ]
  

})
export class StatisticsModule { }
