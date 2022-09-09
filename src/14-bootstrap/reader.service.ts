import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  // gettAllBooks: string = "http://localhost:9090/api/v1/reader/books";
  // getBooksUsingFilter : string = "http://localhost:9090/api/v1/reader/books/search";
  // buyBooks : string = "http://localhost:9090/api/v1/reader/books/buy"
  // refundBooks : string = "http://localhost:9090/api/v1/reader/";
  // getAllSubsBooks: string = "http://localhost:9090/api/v1/reader/";
  // readBook: string = "http://localhost:9090/api/v1/reader/";
  // getAllBooksActiveNon: string = "http://localhost:9090/api/v1/reader/books/all-books";
  gettAllBooks: string = "https://o0u75shtti.execute-api.us-west-2.amazonaws.com/api/v1/reader/books";
  getBooksUsingFilter : string = "https://o0u75shtti.execute-api.us-west-2.amazonaws.com/api/v1/reader/books/search";
  buyBooks : string = "http://35.91.147.161:9090/api/v1/reader/books/buy"
  refundBooks : string = "http://35.91.147.161:9090/api/v1/reader/";
  getAllSubsBooks: string = "http://35.91.147.161:9090/api/v1/reader/";
  readBook: string = "http://35.91.147.161:9090/api/v1/reader/";
  getAllBooksActiveNon: string = "http://35.91.147.161:9090/api/v1/reader/books/all-books";

  u:any = {
    id: "",
    name: "",
    email: "",
    content: ""
  }

  books:any[] = []; 
  
  constructor(private http : HttpClient) { }

  set name(n:string){
    this.u.name = n;
  }

  set id(id:number){
    this.u.id = id;
  }

  set email(e:string){
    this.u.email = e;
  }

  set content(e:string){
    this.u.content = e;
  }
  
  get book(){
    return this.u;
  }

  getAllBooks(){
    console.log("Get all books")
    return this.http.get(this.gettAllBooks)
  }

  getAllBooksActiveNonActive(){
    console.log("Get all books for author")
    return this.http.get(this.getAllBooksActiveNon)
  }

  searchBooksByFilter(req:any){
    console.log("Get all books by filters")
    //return this.http.get(this.getBooksUsingFilter)
    return this.http.get(this.getBooksUsingFilter,{
      params: req
    })
  }

  subscribeBook(m:any){
    console.log("Subscribe for book")
    return this.http.post(this.buyBooks, m)
  }

  unsubscribe(email:string,bookId:number){
    console.log("Un-Subscribe for book")
    return this.http.put(this.refundBooks + email + "/books/"+bookId+ "/refund",null)
  }

  getAllSubBooks(email:string){
    console.log("Get all Subscribed books")
    return this.http.get(this.getAllSubsBooks + email +"/books")
  }

  readBookContent(email:string,id:number){
    console.log("Read book contents");
    return this.http.get(this.readBook + email + "/books/" + id)
    
  }
}
