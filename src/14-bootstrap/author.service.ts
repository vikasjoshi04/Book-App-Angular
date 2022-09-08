import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  // crateUrl: string = "http://localhost:9090/api/v1/author/";
  // updateUrl : string = "http://localhost:9090/api/v1/author/";
  // authenticateUrl: string = "http://localhost:9090/api/v1/author/authenticate";
  // signUpUrl : string = "http://localhost:9090/api/v1/author/signup";
  crateUrl: string = "http://35.92.21.142:9090/api/v1/author/";
  updateUrl : string = "http://35.92.21.142:9090/api/v1/author/";
  authenticateUrl: string = "http://35.92.21.142:9090/api/v1/author/authenticate";
  signUpUrl : string = "http://35.92.21.142:9090/api/v1/author/signup";

  constructor(private http : HttpClient) { }

  login(m:any){
    console.log("Authenticating author from backend")
    return this.http.post(this.authenticateUrl,m,)
  }

  signUp(m:any){
    console.log("Sign up from backend")
    return this.http.post(this.signUpUrl,m,)
  }
  
  create(token:string,id:number,m:any){
    
  const headers= new HttpHeaders()
  .set('Authorization', 'Bearer ' + token)
    return this.http.post(this.crateUrl + id.toString() + "/books", m,{'headers': headers})
  }

  update(token: string,aid:number,bid:number,m:any){
  const headers= new HttpHeaders()
  .set('Authorization', 'Bearer ' + token)
    return this.http.put(this.updateUrl + aid.toString() + "/books/"+ bid.toString(),m, {'headers': headers})
  }
}
