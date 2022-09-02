import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclamation } from '../models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  Url:string="http://localhost:3000/contact";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private http:HttpClient) { }

  getone(id:any){
    return this.http.get<Reclamation>(`${this.Url}/${id}`,this.httpOptions)
  }
  getAll(){
    return this.http.get<Reclamation[]>(this.Url,this.httpOptions);
  }
    
  add(Reclamation:any){
    return this.http.post<Reclamation>(this.Url,Reclamation,this.httpOptions);
  }

  edit(Reclamation:any){
    return this.http.put<Reclamation>(`${this.Url}/${Reclamation._id}`, Reclamation,this.httpOptions);
  }

  delete(id:any){
    return this.http.delete(`${this.Url}${id}`,this.httpOptions);
  }
}
