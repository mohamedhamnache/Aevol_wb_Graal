import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SimulationService} from'../../Services/simulation/simulation.service'
@Component({
  selector: 'ngx-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
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
    file:any;
    params;
    seedLength;
    mutLength;
  constructor(private formBuilder: FormBuilder,private simulationService : SimulationService,private router : Router) { }

  ngOnInit() {this.rumSimForm = this.formBuilder.group({
    simName: ['', Validators.required],
    NBGen: ['', Validators.required],
    NBth: ['', Validators.required],
    paramFile: ['', Validators.required],
    params : ['', Validators.required],
  });

  }
  

  OnUpload(files: File[]): void {
    //console.log(files)
    //this.fileUpload.upload(files);
    this.paramFile = files;
  }

  get f() { return this.rumSimForm.controls; }
  
  fileChanged(ev) {
    this.file = ev.target.files[0];
   }
   
  DataBodyGen(files: File[],params,ID_USER,Nom_simu,id_deployment,nb_gen,nb_th)
  {
    
      var formData = new FormData();
      Array.from(files).forEach(f => formData.append('file', f))
      Array.from(files).forEach(f => formData.append('params', params))
      Array.from(files).forEach(f => formData.append('ID_USER', ID_USER))
      Array.from(files).forEach(f => formData.append('Nom_simu', Nom_simu))
      Array.from(files).forEach(f => formData.append('id_deployment', id_deployment))
      Array.from(files).forEach(f => formData.append('nb_gen', nb_gen))
      Array.from(files).forEach(f => formData.append('nb_th', nb_th))
      console.log(formData)
      return formData
  }

  OnRunSimComp(form : NgForm)
  {
    this.submitted = true;

        // stop here if form is invalid
        if (this.rumSimForm.invalid) {
            return;
        }
        this.arr = form.value
        this.simName=this.arr['simName']
        this.nbGenerations =this.arr['NBGen']
        this.nbThreads = this.arr['NBth']
        
        this.simulationService.getJobInfo().subscribe(data => {
        
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

            let reader = new FileReader();
        reader.onload = (e) =>{
           this.params = reader.result 
        };
        reader.readAsText(this.file);
       setTimeout(() => {
         //const data = { params:this.params.replace(/[\r\n]\s*/g, ''),
         //ID_USER : this.Id_user,
         //Nom_simu:this.arr['simName'],
         //id_deployment :this.id_deployment,
         
      // }
       var data = new FormData();
       data = this.DataBodyGen(this.paramFile,
        this.params.replace(/[\r\n]\s*/g, ''),
        this.Id_user,
        this.simName,
        this.id_deployment,
        this.nbGenerations,
        this.nbThreads)
       //console.log("####################")
       //console.log(data)
       //console.log("####################")
        this.simulationService.runWFSim(data).subscribe(res =>{
          //console.log(res)
        })
         //console.log(data)
         
       }, 25);



           })
           
          }
          else{let reader = new FileReader();
            reader.onload = (e) =>{
              this.params = reader.result 
            };
          reader.readAsText(this.file);
          setTimeout(() => {
            //const data = { params:this.params.replace(/[\r\n]\s*/g, ''),
            //ID_USER : this.Id_user,
            //Nom_simu:this.arr['simName'],
            //id_deployment :this.id_deployment,
            
          // }
          var data = new FormData();
          data = this.DataBodyGen(this.paramFile,
            this.params.replace(/[\r\n]\s*/g, ''),
            this.Id_user,
            this.simName,
            this.id_deployment,
            this.nbGenerations,
            this.nbThreads)
          //console.log("####################")
          //console.log(data)
          //console.log("####################")
            this.simulationService.runWFSim(data).subscribe(res =>{
              //console.log(res)
            })
            //console.log(data)
            
          }, 25);



            
          }
       }
       else{
          console.log("Make a new reservation, Cause : Error")
          const reservation ={NbNodes:1,walltime:"7:00:00",jobName:"Aevol-Sim-MH"}
          this.simulationService.makeG5kReservation(reservation).subscribe(data => {

            let reader = new FileReader();
            reader.onload = (e) =>{
              this.params = reader.result 
            };
          reader.readAsText(this.file);
          setTimeout(() => {
            //const data = { params:this.params.replace(/[\r\n]\s*/g, ''),
            //ID_USER : this.Id_user,
            //Nom_simu:this.arr['simName'],
            //id_deployment :this.id_deployment,
            
          // }
          var data = new FormData();
          data = this.DataBodyGen(this.paramFile,
            this.params.replace(/[\r\n]\s*/g, ''),
            this.Id_user,
            this.simName,
            this.id_deployment,
            this.nbGenerations,
            this.nbThreads)
          //console.log("####################")
          //console.log(data)
          //console.log("####################")
            this.simulationService.runWFSim(data).subscribe(res =>{
              //console.log(res)
            })
            //console.log(data)
            
          }, 25);



           })
      
       }  
        
          
          

        })


       
        
        

    
    //console.log(this.arr)
  }

}
