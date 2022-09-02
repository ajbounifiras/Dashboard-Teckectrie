import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  user=new User
  id=''
  constructor(private us:UserService,private activerouter:ActivatedRoute) { 

    this.activerouter.params.subscribe((data:any)=>this.id=data.id)
    this.us.getone(this.id).subscribe((data:any)=>{
      console.log(this.user=data.data);
    })
  }

  ngOnInit(): void {
  }
edit(){
this.us.edit(this.user).subscribe(data=>{
  console.log(data);
})
}
}
