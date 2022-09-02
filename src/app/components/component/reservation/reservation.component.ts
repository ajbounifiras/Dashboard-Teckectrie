import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
listereservation :Reservation[]=[]
reserve=new Reservation
  constructor(private reservation:ReservationService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.reservation.getAll().subscribe((data:any)=>{
      this.listereservation=data.data
      console.log(data.data)
    })
  }
delete(id:any){
this.reservation.delete(id).subscribe(data=>{
  console.log(data)
  this.getAll()
})
}

}
