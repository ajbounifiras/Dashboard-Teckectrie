import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ville } from '../models/ville';

@Injectable({
  providedIn: 'root'
})
export class VilleService {
  Url:string="http://localhost:3000/etat";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private http:HttpClient) { }

  getone(id:any){
    return this.http.get<Ville>(`${this.Url}/${id}`,this.httpOptions)
  }
  getAll(){
    return this.http.get<Ville[]>(this.Url,this.httpOptions);
  }
    
  add(Ville:any){
    return this.http.post<Ville>(this.Url,Ville,this.httpOptions);
  }

  edit(Ville:any){
    return this.http.put<Ville>(`${this.Url}/${Ville._id}`, Ville,this.httpOptions);
  }

  delete(id:any){
    return this.http.delete(`${this.Url}/${id}`,this.httpOptions);
  }
}
