import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Secteur } from 'src/app/models/secteur';
import { SecteurService } from 'src/app/services/secteur.service';

@Component({
  selector: 'app-viewsecteur',
  templateUrl: './viewsecteur.component.html',
  styleUrls: ['./viewsecteur.component.css']
})
export class ViewsecteurComponent implements OnInit {

  lists:Secteur[]=[]
  se=new Secteur
  constructor(private st:SecteurService,private router:Router) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.st.getAll().subscribe(data=>{
      this.lists=data;
      console.log(this.lists);
    })
  }
  edit(id:any){
    this.st.getone(id).subscribe(data=>{
      console.log(data)
      this.se=data
      this.router.navigate(['/editsecteur/'+id])
     
    })
  }
  delete(id:any){
    this.st.delete(id).subscribe(data=>{
      console.log(data);
      this.getAll();
    })
  }

}
