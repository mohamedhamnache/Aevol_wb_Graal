import { Component, OnInit } from '@angular/core';
import { saveAs } from "file-saver";
import {JobTabService} from '../../../Services/job/job-tab.service'
import {FileUploadService} from '../../../Services/file-upload/file-upload.service'
@Component({
  selector: 'ngx-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private jobService :JobTabService,private downloadRes : FileUploadService) { }
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
  Ondownload(simName,idJob)
  {
    const body ={Nom_simu:simName,id_job:idJob}
    this.downloadRes.downloadResult(body).subscribe(res =>{
      console.log("Downloading ....")
      console.log(res)
      let fileName = simName +'-'+idJob
      saveAs(res,fileName)
      return res
    })
  }

}
