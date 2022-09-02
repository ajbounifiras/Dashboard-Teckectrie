import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  user=new User
  constructor(private us:UserService) { }

  ngOnInit(): void {
  }
  add(){
    this.us.add(this.user).subscribe(data=>{
      console.log(data)
    })
  }
}
