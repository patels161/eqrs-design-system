import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  visibility: boolean = false;
  show: boolean = true;
  htmlLanguage = 'html';
  cssLanguage = 'css';
  cssContent =
      '<div class="eqrs-alert-success  col-md-12">\n' +
        '<div class="eqrs-alert-body">\n' +
            '<h4 class="eqrs-alert-heading">Success status</h4>\n' +
                    '<p>Displays when database change is successful.</p>\n' +
        '</div>\n' +
    '</div>';

  constructor() { }

  ngOnInit() {
  }

}
