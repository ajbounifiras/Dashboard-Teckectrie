import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/admin';
import { AuthadminService } from '../services/authadmin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
admin=new Admin
  constructor(private service:AuthadminService,private route:Router) { }

  ngOnInit(): void {
  }
login(){
  console.log(this.admin)
   this.service.login(this.admin).subscribe(async (data)=>{
     console.log(data);
     if(data.token!=null){

     await localStorage.setItem("adminData",JSON.stringify(data));
     await localStorage.setItem("userName",data.userName);
     await localStorage.setItem("token",data.token);
    
     if(data.role=="admin"){
       this.route.navigateByUrl("/sidebar")
     }else{
       this.route.navigateByUrl("")
     }
     }
     },erreur=>{console.log(erreur)}) 
 }

}

