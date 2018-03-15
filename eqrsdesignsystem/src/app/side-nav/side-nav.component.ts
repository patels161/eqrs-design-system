import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  flag: boolean=false; 
  flag1: boolean=false;
  flag2: boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
