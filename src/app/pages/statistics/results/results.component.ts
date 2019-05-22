import { Component, OnInit } from '@angular/core';
import {JobTabService} from '../../../Services/job/job-tab.service'
@Component({
  selector: 'ngx-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private jobService :JobTabService) { }
  Datatable = []; 
  ngOnInit() {
    this.actu()
  }

  actu(){
    this.Datatable =[]
    const body ={ID_USER : localStorage.getItem('ID_USER')}
    this.jobService.getFinishedUserJobs(body).subscribe(data => {
    
        data = JSON.parse(JSON.stringify(data)).Jobs
        var arr = Array.from(Object.keys(data), k=>data[k]);
        const inv =arr.reverse();
        let job
        let table = '<th >Simulation name</th><th>Status</th><th>Cancel</th></tr>'
        for (var i in inv)
        {
          job =inv[i]
          this.Datatable.push(job)
        }     
    });
  } 

}
