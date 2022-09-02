import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ville } from 'src/app/models/ville';
import { VilleService } from 'src/app/services/ville.service';

@Component({
  selector: 'app-editville',
  templateUrl: './editville.component.html',
  styleUrls: ['./editville.component.css']
})
export class EditvilleComponent implements OnInit {

  ville=new Ville
  id=''
    constructor(private vl:VilleService,private activerouter:ActivatedRoute) { 
      this.activerouter.params.subscribe((data:any)=>this.id=data.id)
      this.vl.getone(this.id).subscribe(data=>{
        console.log(this.ville=data);
      });
      }
  
    ngOnInit(): void {
    }
  edit(){
    this.vl.edit(this.ville).subscribe(data=>{
      console.log(data);
    })
  }

}
