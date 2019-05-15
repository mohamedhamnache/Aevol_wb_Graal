import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

import {JobTabService} from '../../../Services/job/job-tab.service'
import { never } from 'rxjs';
import { COSMIC_THEME } from '../../../@theme/styles/theme.cosmic';
let  urlActive: string;
let policies =[] ;
let Datatable = [];
@Component({
  selector: 'ngx-job-table',
  templateUrl: './job-table.component.html',
  styleUrls: ['./job-table.component.scss']
})
export class JobTableComponent implements OnInit {
  
  constructor(private jobService :JobTabService) {

   }
   

  Datatable = []; 
  ngOnInit() {
    this.actu();
  }

  actu(){
    this.Datatable =[]
    const body ={ID_USER : localStorage.getItem('ID_USER')}
    this.jobService.getUserJobs(body).subscribe(data => {
    
        data = JSON.parse(JSON.stringify(data)).Jobs
        var arr = Array.from(Object.keys(data), k=>data[k]);
        const inv =arr.reverse();
        let job
        let table = '<th >Simulation name</th><th>Statut</th><th>Start</th><th>end</th><th>%</th><th>Cancel</th><th>Delete</th></tr>'
        for (var i in inv)
        {
          job =inv[i]
          this.Datatable.push(job)
          var statut = job.Statut;
          var bouton = '<a href="./app/Components/scriptsPhp/deleteSimu.php?act=can&numSimu="><button class="btn btn-warning btn-hero btn-sm">Cancel</button></a>';
          if (statut == 'finished' || statut == 'canceled') {
            bouton = '<button class="btn btn-warning btn-hero btn-sm" disabled>Cancel</button>';
            
          }
          if (statut != 'running' && statut != 'finished'){
            statut = statut + '<br><a href="./app/Components/scriptsPhp/fromCheckpoint.php?numSimu=">\nRestart from last checkpoint</a>'
          }
          //
        }
        
    });
  } 

  onDeleteConfirm(event,idjob) : void {
    if (window.confirm('Are you sure you want to delete the simulation?')) {
      const body ={ID_USER:localStorage.getItem('ID_USER'),ID_JOB:Number(idjob)}
      this.jobService.RemoveSim(body).subscribe(data => {
        this.Datatable = [];
        this.actu()
      })
      event.confirm.resolve();
    } 
    else
    {
      event.confirm.reject();
    }
   
  }


  onCancelSim(event,idjob) : void {
    const body ={ID_USER:localStorage.getItem('ID_USER'),ID_JOB:Number(idjob),status:"canceled"}
    this.jobService.CancelSim(body).subscribe(data => {
      this.Datatable = [];
      this.actu()
    })
  }
}
