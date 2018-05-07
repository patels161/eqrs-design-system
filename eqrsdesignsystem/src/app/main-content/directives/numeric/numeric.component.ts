import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeric',
  templateUrl: './numeric.component.html',
  styleUrls: ['./numeric.component.css']
})
export class NumericComponent implements OnInit {
  cssLanguage = 'css';
  show: boolean = false;
  content: any;

  constructor() { }

  ngOnInit() {
    this.content = '<input numeric name="xyz" >';
  }

}
