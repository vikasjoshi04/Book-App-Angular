import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReaderService } from 'src/14-bootstrap/reader.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.sass']
})
export class AllbooksComponent {

  books:any[] = [];
  showAlert: boolean = false;
  alertCls : string = "";
  alertMsg : string = "";
  constructor(private service: ReaderService,private router : Router) { 
    this.fetchBooks();
  }

  fetchBooks(){
    if(this.service.books.length > 0){
      this.showAlert = true;
      this.alertCls = "success";
      this.alertMsg = "Books list fetched successfully.";
      this.books = this.service.books;
      this.service.books = [];
    } else {
      this.service.getAllBooks().subscribe({
          next: (res:any)=>{
              console.log(res);
              this.books = res;
              this.showAlert = true;
              this.alertCls = "success";
              this.alertMsg = "Books list fetched successfully.";
          },
          error: (err)=>{
              console.log("some error happened")
              console.log(err)
              this.showAlert = true;
              this.alertCls = "success";
              this.alertMsg = "Books list not fetched";
          }
      })
    }
  }
  
  subscribeBook(id:number,title: string){
      this.service.id = id;
      this.service.name = title;
      this.router.navigate(["subscribe"])
  }

  searchBooks(){
    this.router.navigate(["searchbooks"])
  }
}
