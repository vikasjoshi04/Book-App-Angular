import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/05-service/utils.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.sass']
})
export class Comp1Component implements OnInit {

  result:number = 0;
  constructor(private service: UtilsService) { }

  ngOnInit(): void {
  }

  addNumber(a:number,b:number): void{
   this.result = this.service.add(a,b);
  }

}
