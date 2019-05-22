import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {FileUploadService} from '../../../Services/file-upload/file-upload.service'
import {SimulationService} from'../../../Services/simulation/simulation.service'
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'ngx-new-sim-form',
  templateUrl: './new-sim-form.component.html',
  styleUrls: ['./new-sim-form.component.scss']
})
export class NewSimFormComponent implements OnInit {
  arr: any[]=[]; 
    rumSimForm: FormGroup;
    submitted = false;
    PlatforState :String;
    simName:string;
    nbGenerations;
    nbThreads;
    TimeLetfUnix ;
    bound = 1800;
    id_deployment
    Id_user;
    id_job;
    paramFile: any;
  constructor(private fileUpload :FileUploadService,private formBuilder: FormBuilder, private simulationService : SimulationService,private router : Router) {

  }
  ngOnInit() {
    this.rumSimForm = this.formBuilder.group({
      simName: ['', Validators.required],
      NBGen: ['', Validators.required],
      NBth: ['', Validators.required],
      paramFile: ['', Validators.required],
    
  });
    
  }

  OnUpload(files: File[]): void {
    //console.log(files)
    //this.fileUpload.upload(files);
    this.paramFile = files;
  }
  get f() { return this.rumSimForm.controls; }




 OnRunSim(form : NgForm)
  {
    this.submitted = true;

        // stop here if form is invalid
        if (this.rumSimForm.invalid) {
            return;
        }
    this.arr = form.value
    
    this.simulationService.getJobInfo().subscribe(data => {
       //console.log(data)
       this.PlatforState = JSON.parse(JSON.stringify(data)).state
       this.TimeLetfUnix =  JSON.parse(JSON.stringify(data)).time_left
       this.id_deployment =JSON.parse(JSON.stringify(data)).id_deployment
       this.Id_user = localStorage.getItem('ID_USER')
       if (this.PlatforState!="Error")
       {
         if(this.TimeLetfUnix < this.bound)
         {

           console.log("Make a new reservation, Cause : Bound")
           const reservation ={NbNodes:1,walltime:"7:00:00",jobName:"Aevol-Sim-MH"}
           this.simulationService.makeG5kReservation(reservation).subscribe(data => {

              const body ={ID_USER : this.Id_user,Nom_simu:this.arr['simName'],id_deployment:this.id_deployment}
              this.simulationService.creatNewJob(body).subscribe(data => {
              console.log(data)
              this.id_job = JSON.parse(JSON.stringify(data)).ID_JOB
              console.log(this.paramFile)
              this.fileUpload.upload(this.paramFile,this.id_job);
              const params ={ID_USER : this.Id_user,ID_JOB:this.id_job,Nom_simu:this.arr['simName'],nb_gen:this.arr['NBGen'],nb_th:this.arr['NBth'],id_deployment:this.id_deployment }
              this.simulationService.runSingleSim(params).subscribe(data => {
                console.log("run !!")
              })
            })     
            })
          }
          else{
            const body ={ID_USER : this.Id_user,Nom_simu:this.arr['simName'],id_deployment:this.id_deployment}
            this.simulationService.creatNewJob(body).subscribe(data => {
            console.log(data)
            this.id_job = JSON.parse(JSON.stringify(data)).ID_JOB
            console.log(this.paramFile)
            this.fileUpload.upload(this.paramFile,this.id_job);
            const params ={ID_USER : this.Id_user,ID_JOB:this.id_job,Nom_simu:this.arr['simName'],nb_gen:this.arr['NBGen'],nb_th:this.arr['NBth'],id_deployment:this.id_deployment }
            this.simulationService.runSingleSim(params).subscribe(data => {
                console.log("run !!")
              })


          })
          }
       }
       else{
          console.log("Make a new reservation, Cause : Error")
          const reservation ={NbNodes:1,walltime:"7:00:00",jobName:"Aevol-Sim-MH"}
          this.simulationService.makeG5kReservation(reservation).subscribe(data => {
            const body ={ID_USER : this.Id_user,Nom_simu:this.arr['simName'],id_deployment:this.id_deployment}
            this.simulationService.creatNewJob(body).subscribe(data => {
             console.log(data)
             this.id_job = JSON.parse(JSON.stringify(data)).ID_JOB
             console.log(this.paramFile)
             this.fileUpload.upload(this.paramFile,this.id_job);
             const params ={ID_USER : this.Id_user,ID_JOB:this.id_job,Nom_simu:this.arr['simName'],nb_gen:this.arr['NBGen'],nb_th:this.arr['NBth'],id_deployment:this.id_deployment }
             this.simulationService.runSingleSim(params).subscribe(data => {
               console.log("run !!")
             })

           })
            
          })
       }
       setTimeout(res=>{ this.router.navigate(['/pages/tables/jobTable'])},2000)  
    })
  }

  

}
