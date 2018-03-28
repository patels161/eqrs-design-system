import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iconography',
  templateUrl: './iconography.component.html',
  styleUrls: ['./iconography.component.css']
})
export class IconographyComponent implements OnInit {
  language = 'html';
  content = '<p>test</p>';
  constructor() { }

  ngOnInit() {
  }

}
