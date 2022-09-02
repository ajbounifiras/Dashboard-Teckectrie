import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Url:string="http://localhost:3000/employer";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private http:HttpClient) { }

  getone(id:any){
    return this.http.get<User>(`${this.Url}/${id}`,this.httpOptions)
  }
  getAll(){
    return this.http.get<User[]>(this.Url,this.httpOptions);
  }
    
  add(User:any){
    return this.http.post<User>(this.Url,User,this.httpOptions);
  }

  edit(User:any){
    return this.http.put<User>(`${this.Url}/${User._id}`, User,this.httpOptions);
  }

  delete(id:any){
    return this.http.delete(`${this.Url}/${id}`,this.httpOptions);
  }
}
