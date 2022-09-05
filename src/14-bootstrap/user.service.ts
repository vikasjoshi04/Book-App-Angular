import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  u:any = {
    name: "",
    valid: false,
    token: ""
  }

  constructor() { }

  set name(n:string){
    this.u.name = n;
  }
  set isValid(flag:boolean){
    this.u.valid = flag;
  }

  set token(t:string){
    this.u.token = t;
  }

  get user(){
    return this.u;
  }
}
