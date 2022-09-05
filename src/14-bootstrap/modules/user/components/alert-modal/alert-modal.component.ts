import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.sass']
})
export class AlertModalComponent implements OnInit {

  @Input() error : any;
  @Input() errorMsg: any;
  constructor() { }

  ngOnInit(): void {
  }

}
