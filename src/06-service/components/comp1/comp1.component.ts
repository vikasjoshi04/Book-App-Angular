import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../utils.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.sass']
})
export class Comp1Component implements OnInit {

  // @autowired
  // UtilService service

  constructor(private service:UtilService) { }

  ngOnInit(): void {
  }

  addNumber(a:number, b:number):void{
    console.log("before add: "+this.service.data.result)
    this.service.add(a, b);
    console.log("after add: "+this.service.data.result)
  }
}
