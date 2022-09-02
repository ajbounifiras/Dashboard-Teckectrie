import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bienfait } from '../models/bienfait';
import { Etablissement } from '../models/etablissement';

@Injectable({
  providedIn: 'root'
})
export class BienfaitService {

  Url:string="http://localhost:3000/bienfait";
  Url1:string="http://localhost:3000/etablissement";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private http:HttpClient) { }

  getone(id:any){
    return this.http.get<Bienfait>(`${this.Url}/${id}`,this.httpOptions)
  }
  getAll(){
    return this.http.get<Bienfait[]>(this.Url,this.httpOptions);
  }
    
  add(Bienfait:any){
    return this.http.post<Bienfait>(this.Url,Bienfait,this.httpOptions);
  }

  edit(Bienfait:any){
    return this.http.put<Bienfait>(`${this.Url}/${Bienfait._id}`, Bienfait,this.httpOptions);
  }

  delete(id:any){
    return this.http.delete(`${this.Url}/${id}`,this.httpOptions);
  }
  getEtablissement(){
    return this.http.get<Etablissement[]>(`${this.Url1}`)
  }
}
