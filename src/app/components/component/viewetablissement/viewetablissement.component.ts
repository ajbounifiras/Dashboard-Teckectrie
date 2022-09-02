import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etablissement } from 'src/app/models/etablissement';
import { EtablissementService } from 'src/app/services/etablissement.service';

@Component({
  selector: 'app-viewetablissement',
  templateUrl: './viewetablissement.component.html',
  styleUrls: ['./viewetablissement.component.css']
})
export class ViewetablissementComponent implements OnInit {

  listeu:Etablissement[]=[]
  u=new Etablissement
  constructor(private et:EtablissementService,private router:Router) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.et.getAll().subscribe((data:any)=>{
      this.listeu=data.data;
      console.log(data.data);
    })
  }
  edit(id:any){
    this.et.getone(id).subscribe(data=>{
      console.log(data)
      this.u=data
      this.router.navigate(['/editetablissement/'+id])
     
    })
  }
  delete(id:any){
    this.et.delete(id).subscribe(data=>{
      console.log(data);
      this.getAll();
    })
  }

}
