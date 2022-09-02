import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Secteur } from '../models/secteur';

@Injectable({
  providedIn: 'root'
})
export class SecteurService {
  Url:string="http://localhost:3000/secteur";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private http:HttpClient) { }

  getone(id:any){
    return this.http.get<Secteur>(`${this.Url}/${id}`,this.httpOptions)
  }
  getAll(){
    return this.http.get<Secteur[]>(this.Url,this.httpOptions);
  }
    
  add(Secteur:any){
    return this.http.post<Secteur>(this.Url,Secteur,this.httpOptions);
  }

  edit(Secteur:any){
    return this.http.put<Secteur>(`${this.Url}/${Secteur._id}`, Secteur,this.httpOptions);
  }

  delete(id:any){
    return this.http.delete(`${this.Url}/${id}`,this.httpOptions);
  }
}
