import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../utils.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.sass'],
  // providers: [UtilService]
})
export class Comp2Component implements OnInit {

  data:any = {};
  constructor(private service:UtilService) { 
    this.data = this.service.data;
  }

  ngOnInit(): void {
  }
}
