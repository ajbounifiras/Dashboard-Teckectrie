import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  listeu:Reclamation[]=[]
  u=new Reclamation
  constructor(private cs:ReclamationService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.cs.getAll().subscribe((data:any)=>{
      this.listeu=data.data
      console.log(data.data)
    })
  }
delete(id:any){
this.cs.delete(id).subscribe(data=>{
  console.log(data)
  this.getAll()
})
}
}
