import { Component, OnInit } from '@angular/core';
import { Ville } from 'src/app/models/ville';
import { VilleService } from 'src/app/services/ville.service';

@Component({
  selector: 'app-addville',
  templateUrl: './addville.component.html',
  styleUrls: ['./addville.component.css']
})
export class AddvilleComponent implements OnInit {
  ville=new Ville
  constructor(private vi:VilleService) { }

  ngOnInit(): void {
  }
add(){
this.vi.add(this.ville).subscribe(data=>{
  console.log(data);
})
}

}
