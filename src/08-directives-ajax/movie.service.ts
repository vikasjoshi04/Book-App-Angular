import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  host: string = "http://localhost:8080/api/v1/movies"

  constructor(private http:HttpClient) { }

  getAll(){
    console.log("finding movies from backend app")
    return this.http.get(this.host)
  }

  create(m:any){
    return this.http.post(this.host, m)
  }

  remove(id:number){
    return this.http.delete(this.host+"/"+id)
  }

  
}
