import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etablissement } from 'src/app/models/etablissement';
import { EtablissementService } from 'src/app/services/etablissement.service';

@Component({
  selector: 'app-editetablissement',
  templateUrl: './editetablissement.component.html',
  styleUrls: ['./editetablissement.component.css']
})
export class EditetablissementComponent implements OnInit {

  et=new Etablissement
  id=''
    constructor(private es:EtablissementService,private activerouter:ActivatedRoute) {
      this.activerouter.params.subscribe((data:any)=>this.id=data.id)
      this.es.getone(this.id).subscribe((data:any)=>{
        console.log(this.et=data.data);
      })
     }
  
    ngOnInit(): void {
    }
    edit(){
      this.es.edit(this.et).subscribe(data=>{
        console.log(data);
      })
    }
}
