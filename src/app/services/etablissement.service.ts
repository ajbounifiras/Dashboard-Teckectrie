import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etablissement } from '../models/etablissement';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
  Url:string="http://localhost:3000/etablissement";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private http:HttpClient) { }

  getone(id:any){
    return this.http.get<Etablissement>(`${this.Url}/${id}`,this.httpOptions)
  }
  getAll(){
    return this.http.get<Etablissement[]>(this.Url,this.httpOptions);
  }
    
  add(Etablissement:any){
    return this.http.post<Etablissement>(this.Url,Etablissement,this.httpOptions);
  }

  edit(Etablissement:any){
    return this.http.put<Etablissement>(`${this.Url}/${Etablissement._id}`, Etablissement,this.httpOptions);
  }

  delete(id:any){
    return this.http.delete(`${this.Url}/${id}`,this.httpOptions);
  }
}
