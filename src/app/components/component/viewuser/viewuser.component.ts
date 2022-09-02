import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  listeu:User[]=[];
  u=new User;
  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.us.getAll().subscribe((data:any)=>{
      this.listeu=data.data;
      console.log(data.data);
    })
  }
  edit(id:any){
    this.us.getone(id).subscribe(data=>{
      console.log(data)
      this.u=data
      this.router.navigate(['/edituser/'+id])
     
    })
  }
  delete(id:any){
    this.us.delete(id).subscribe(data=>{
      console.log(data);
      this.getAll();
    })
  }

}
