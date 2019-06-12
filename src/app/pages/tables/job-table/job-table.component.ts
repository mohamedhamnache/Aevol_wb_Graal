import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Router } from '@angular/router';
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
  
  constructor(private jobService :JobTabService, private router: Router) {
    router.events.subscribe((val) => {
      urlActive = String(val['url']);
  });

   }
   

  Datatable = []; 
  ngOnInit() {
    this.actu();
  }


  getColor(status) { 
    switch (status) {
      case 'finished':
        return 'green';
      case 'setting up':
        return 'blue';
      case 'running':
        return 'red';
    }
  }

  refreshTab(){
    const body ={ID_USER : localStorage.getItem('ID_USER')}
    this.jobService.getUserJobs(body).subscribe(data => {
    this.Datatable =[]
    data = JSON.parse(JSON.stringify(data)).Jobs
    var arr = Array.from(Object.keys(data), k=>data[k]);
    const inv =arr.reverse();
    let job
    for (var i in inv)
    {
      job =inv[i]
      this.Datatable.push(job)
    } 
});
}



  actu(){
    this.refreshTab()
    const body ={ID_USER : localStorage.getItem('ID_USER')}
    var interval =setInterval(res =>{this.jobService.getUserJobs(body).subscribe(data => {
        this.Datatable =[]
        data = JSON.parse(JSON.stringify(data)).Jobs
        var arr = Array.from(Object.keys(data), k=>data[k]);
        const inv =arr.reverse();
        let job
        for (var i in inv)
        {
          job =inv[i]
          this.Datatable.push(job)
        }
        if (urlActive !='/pages/tables/jobTable'){
          clearInterval(interval);
        }
        
    });
  },12000)
  } 

  onDeleteConfirm(event,idjob) : void {
    if (window.confirm('Are you sure you want to delete the simulation?')) {
      const body ={ID_USER:localStorage.getItem('ID_USER'),ID_JOB:Number(idjob)}
      this.jobService.RemoveSim(body).subscribe(data => {
        this.Datatable = [];
        //this.actu()
        this.refreshTab()
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
      //this.actu()
      this.refreshTab()
    })
  }
}
