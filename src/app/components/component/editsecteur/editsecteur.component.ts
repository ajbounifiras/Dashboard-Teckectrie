import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Secteur } from 'src/app/models/secteur';
import { SecteurService } from 'src/app/services/secteur.service';

@Component({
  selector: 'app-editsecteur',
  templateUrl: './editsecteur.component.html',
  styleUrls: ['./editsecteur.component.css']
})
export class EditsecteurComponent implements OnInit {
  secteur=new Secteur
  id=''
  constructor(private sr:SecteurService,private activerouter:ActivatedRoute) {

    this.activerouter.params.subscribe((data:any)=>this.id=data.id)
    this.sr.getone(this.id).subscribe(data=>{
      console.log(this.secteur=data);
    })
   }

  ngOnInit(): void {
  }
  edit(){
    this.sr.edit(this.secteur).subscribe(data=>{
      console.log(data);
    })  
  }
}
