import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bienfait } from 'src/app/models/bienfait';
import { BienfaitService } from 'src/app/services/bienfait.service';

@Component({
  selector: 'app-viewbienfait',
  templateUrl: './viewbienfait.component.html',
  styleUrls: ['./viewbienfait.component.css']
})
export class ViewbienfaitComponent implements OnInit {
  listes:Bienfait[]=[]
  s=new Bienfait
  constructor(private sr:BienfaitService,private router:Router) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.sr.getAll().subscribe((data:any)=>{
      this.listes=data.data;
      console.log(data.data);
    })
  }
  edit(id:any){
    this.sr.getone(id).subscribe(data=>{
      console.log(data)
      this.s=data
      this.router.navigate(['/editservice/'+id])
     
    })
  }
  delete(id:any){
    this.sr.delete(id).subscribe(data=>{
      console.log(data);
      this.getAll();
    })
  }

}
