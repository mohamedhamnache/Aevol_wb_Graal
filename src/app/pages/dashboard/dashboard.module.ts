import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { NewSimFormComponent } from './new-sim-form/new-sim-form.component';
import { ResumeSimFormComponent } from './resume-sim-form/resume-sim-form.component';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent, 
    NewSimFormComponent, 
    ResumeSimFormComponent,
  ], 
})
export class DashboardModule { }
