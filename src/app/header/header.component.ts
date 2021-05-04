import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItems = ["Tasks","Completed","Missed","Create"]
  selectedItem = 0;

  setActive(data: number){
    this.selectedItem = data;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
