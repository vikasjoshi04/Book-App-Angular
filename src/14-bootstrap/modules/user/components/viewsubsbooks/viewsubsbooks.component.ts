import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReaderService } from 'src/14-bootstrap/reader.service';

@Component({
  selector: 'app-viewsubsbooks',
  templateUrl: './viewsubsbooks.component.html',
  styleUrls: ['./viewsubsbooks.component.sass']
})
export class ViewsubsbooksComponent {

  books:any[] = [];
  showAlert: boolean = false;
  alertCls : string = "";
  alertMsg : string = ""; 
  defEmail: string = "";
  constructor(private service: ReaderService,private router : Router) {
    if(typeof this.service.book.email !== 'undefined' && this.service.book.email.length > 0){
      let book1:any = {email: ""}; 
      book1.email = this.service.book.email;
      console.log("view Subsbooks :",book1);
      this.service.email = "";
      this.fetchSubscribedBooks(book1);
    } 
  }

  fetchSubscribedBooks(data : any){
    this.service.email = data.email;
    this.defEmail = data.email;
    this.service.getAllSubBooks(data.email).subscribe({
        next: (res:any)=>{
            console.log(res);
            this.showAlert = true;
            this.alertCls = "success";
            this.alertMsg = "Subscribed Books list fetched successfully.";
            this.books = res;
        },
        error: (err)=>{
            this.books = []
            console.log("some error happened")
            console.log(err)
            this.showAlert = true;
            this.alertCls = "danger";
            this.alertMsg = "Subscribed Books list fetched Failed.";
        }
    })
  }

  unSubscribedBooks(id : any){
    let emailId = this.service.book.email;
    console.log("Email",emailId);
    
    this.service.unsubscribe(emailId,id).subscribe({
        next: (res:any)=>{
            console.log(res);
            this.fetchSubscribedBooks(this.service.book);
        },
        error: (err)=>{
            this.books = []
            console.log("some error happened")
            console.log(err)
        }
    })
  }

  readBookContent(id : any){
    let emailId = this.service.book.email;
    console.log("Email",emailId);
    
    this.service.readBookContent(emailId,id).subscribe({
        next: (res:any)=>{
            console.log(res.content);
            this.service.content = res.content;
            this.service.name = res.title;
            this.service.id = res.id;
            this.router.navigate(["readbook"])
        },
        error: (err)=>{
            console.log("some error happened")
            console.log(err)
        }
    })
  }
}
