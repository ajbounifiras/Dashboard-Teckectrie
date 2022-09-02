import { Component, OnInit } from '@angular/core';
import { Secteur } from 'src/app/models/secteur';
import { SecteurService } from 'src/app/services/secteur.service';

@Component({
  selector: 'app-addsecteur',
  templateUrl: './addsecteur.component.html',
  styleUrls: ['./addsecteur.component.css']
})
export class AddsecteurComponent implements OnInit {

  se=new Secteur
  constructor(private st:SecteurService) { }

  ngOnInit(): void {
  }
add(){
  this.st.add(this.se).subscribe(data=>{
    console.log(data);
  })
}

}
