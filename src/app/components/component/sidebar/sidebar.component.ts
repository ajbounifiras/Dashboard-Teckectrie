import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
userName:any
  constructor() { 
    this.userName=localStorage.getItem('userName')
  }

  ngOnInit(): void {
  }

}
