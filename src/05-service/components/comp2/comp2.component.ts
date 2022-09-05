import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/05-service/utils.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.sass']
})
export class Comp2Component implements OnInit {

  result:number = 0;
  constructor(private service:UtilsService) { }

  ngOnInit(): void {
  }
  sum(a:number, b:number):void{
    this.result = this.service.add(a, b);
  }
}
