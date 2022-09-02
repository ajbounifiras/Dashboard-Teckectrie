import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthadminService {
  Url:string="http://localhost:3000/admin/";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private http:HttpClient) { }

  register(Admin:any){
    return this.http.post<Admin>(this.Url,Admin,this.httpOptions);
  }
  login(Admin:any){
    return this.http.post<any>(this.Url+'login',Admin,this.httpOptions);
  }

}
