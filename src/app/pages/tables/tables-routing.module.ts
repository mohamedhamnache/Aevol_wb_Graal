import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';

import {JobTableComponent} from './job-table/job-table.component'
const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
  {
    path: 'jobTable',
    component: JobTableComponent,
  }
],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
];
