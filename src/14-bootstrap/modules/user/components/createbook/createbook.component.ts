import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from 'src/14-bootstrap/author.service';
import { ReaderService } from 'src/14-bootstrap/reader.service';
import { UserService } from 'src/14-bootstrap/user.service';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.sass']
})
export class CreatebookComponent implements OnInit {

  author:any = {token: "",name: "",valid: ""};
  books:any[] = [];
  showAlert: boolean = false;
  alertCls : string = "";
  alertMsg : string = "";
  constructor(private aService : AuthorService, private service : UserService, private router : Router) {
    this.author = this.service.user;
    //console.log("Createbook constructor:",JSON.stringify(this.author));
  }

  ngOnInit(): void {
  }

  createBook(data:any){
    let req = {title: data.title, category: data.category, publisher: data.publisher, price: data.price, content: data.content, releasedDate: data.releasedDate}
    let token = this.service.user.token;
    console.log('Create Book :',req);
    this.aService.create(token,4,req)
    .subscribe({
        next: (res:any)=>{
            console.log("Search Books res :",res);
            this.books = res;
            this.showAlert = true;
            this.alertCls = "success";
            this.alertMsg = "Book created successfully.";
            //this.router.navigate(["allbooks"])
        },
        error: (err)=>{
            console.log("some error happened")
            console.log(err)
            this.showAlert = true;
            this.alertCls = "danger";
            this.alertMsg = "Book creation failed.";
        }
    })
  }

}
