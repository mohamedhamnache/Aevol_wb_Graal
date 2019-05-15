import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';


@NgModule({
  imports: [
    ThemeModule,
    
    NgxEchartsModule,
    NgxChartsModule,
    
  ],
  declarations: [
    ECommerceComponent,
    
    
   
  ],
  providers: [

  ],
})
export class ECommerceModule { }
