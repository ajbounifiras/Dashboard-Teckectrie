import { Component, OnInit } from '@angular/core';
import { Etablissement } from 'src/app/models/etablissement';
import { EtablissementService } from 'src/app/services/etablissement.service';

@Component({
  selector: 'app-addetablissement',
  templateUrl: './addetablissement.component.html',
  styleUrls: ['./addetablissement.component.css']
})
export class AddetablissementComponent implements OnInit {

  et=new Etablissement 
  constructor(private es:EtablissementService) { }

  ngOnInit(): void {
  }
  add(){
    this.es.add(this.et).subscribe(data=>{
      console.log(data);
    })
  }
}


