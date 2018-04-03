import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  cssLanguage = 'css';
  primaryButtonShow: boolean = false;
  primaryButtonContent: any;
  secondaryButtonShow: boolean = false;
  secondaryButtonContent: any;
  accentButtonShow: boolean = false;
  accentButtonContent: any;
  destructiveButtonShow: boolean = false;
  destructiveButtonContent: any;
  disabledButtonShow: boolean = false;
  disabledButtonContent: any;
  exlayout1ButtonShow: boolean = false;
  exlayout1ButtonContent: any;
  exlayout2ButtonShow: boolean = false;
  exlayout2ButtonContent: any;
  buttonlinksButtonShow: boolean = false;
  buttonlinksButtonContent: any;

  constructor() { }

  ngOnInit() {
    this.primaryButtonContent = '<div class="eqrs-alert-success  col-md-12">\n' +
      '               <div class="eqrs-alert-body">\n' +
      '                 <h4>Primary buttons</h4>\n' +
      '               </div>\n' +
      '             </div>';
    this.secondaryButtonContent = '';
    this.accentButtonContent = '';
    this.destructiveButtonContent = '';
    this.disabledButtonContent = '';
    this.exlayout1ButtonContent = '';
    this.exlayout2ButtonContent = '';
    this.buttonlinksButtonContent = '';
  }

}
