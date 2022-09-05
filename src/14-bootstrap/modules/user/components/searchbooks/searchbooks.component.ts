import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReaderService } from 'src/14-bootstrap/reader.service';

@Component({
  selector: 'app-searchbooks',
  templateUrl: './searchbooks.component.html',
  styleUrls: ['./searchbooks.component.sass']
})
export class SearchbooksComponent implements OnInit {

  reader:any = {id: "",name: ""};
  books:any[] = []; 
  constructor(private service : ReaderService, private router : Router) {
    this.reader = this.service.book;
    console.log("constructor Service :",JSON.stringify(this.reader));
  }

  ngOnInit(): void {
  }

  searchBook(data:any){
    let req = {title: data.title, category: data.category, publisher: data.publisher, releasedDate: data.releasedDate}
    console.log('SearchBooks :',req);
    this.service.searchBooksByFilter(req)
    .subscribe({
        next: (res:any)=>{
            console.log("Search Books res :",res);
            //this.books = res;
            this.service.books = res;
            this.router.navigate(["allbooks"])
        },
        error: (err)=>{
            console.log("some error happened")
            console.log(err)
        }
    })
  }

  searchAllBooks(){
    this.router.navigate(["allbooks"])
  }

}
