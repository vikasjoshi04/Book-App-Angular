import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() { }
  add(n:number,m:number):number{
    console.log(`adding ${n} and ${m} in service`);
    return n+m;
  }
}
