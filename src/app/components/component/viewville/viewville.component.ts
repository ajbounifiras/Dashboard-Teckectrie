import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ville } from 'src/app/models/ville';
import { VilleService } from 'src/app/services/ville.service';

@Component({
  selector: 'app-viewville',
  templateUrl: './viewville.component.html',
  styleUrls: ['./viewville.component.css']
})
export class ViewvilleComponent implements OnInit {

  listu:Ville[]=[]
  v=new Ville
  constructor(private vl:VilleService,private router:Router) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.vl.getAll().subscribe(data=>{
      this.listu=data;
      console.log(this.listu);
    })
  }
  edit(id:any){
    this.vl.getone(id).subscribe(data=>{
      console.log(data)
      this.v=data
      this.router.navigate(['/editville/'+id])
     
    })
  }
  delete(id:any){
    this.vl.delete(id).subscribe(data=>{
      console.log(data);
      this.getAll();
    })
  }

}
