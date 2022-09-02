import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  Url:string="http://localhost:3000/reservation";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private http:HttpClient) { }

  getone(id:any){
    return this.http.get<Reservation>(`${this.Url}/${id}`,this.httpOptions)
  }
  getAll(){
    return this.http.get<Reservation[]>(this.Url,this.httpOptions);
  }
    
  add(Reservation:any){
    return this.http.post<Reservation>(this.Url,Reservation,this.httpOptions);
  }

  edit(Reservation:any){
    return this.http.put<Reservation>(`${this.Url}/${Reservation._id}`, Reservation,this.httpOptions);
  }

  delete(id:any){
    return this.http.delete(`${this.Url}/${id}`,this.httpOptions);
  }
}
