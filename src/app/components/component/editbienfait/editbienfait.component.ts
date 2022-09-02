import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bienfait } from 'src/app/models/bienfait';
import { BienfaitService } from 'src/app/services/bienfait.service';

@Component({
  selector: 'app-editbienfait',
  templateUrl: './editbienfait.component.html',
  styleUrls: ['./editbienfait.component.css']
})
export class EditbienfaitComponent implements OnInit {

  se=new Bienfait
  id=''
    constructor(private sr:BienfaitService,private activerouter:ActivatedRoute) {
  
      this.activerouter.params.subscribe((data:any)=>this.id=data.id)
      this.sr.getone(this.id).subscribe((data:any)=>{
        console.log(this.se=data.data);
      })
     }
  
    ngOnInit(): void {
    }
  edit(){
    this.sr.edit(this.se).subscribe(data=>{
      console.log(data);
    })  
  }

}
