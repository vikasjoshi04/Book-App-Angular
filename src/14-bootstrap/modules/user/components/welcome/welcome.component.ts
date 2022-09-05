import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from 'src/14-bootstrap/author.service';
import { ReaderService } from 'src/14-bootstrap/reader.service';
import { UserService } from 'src/14-bootstrap/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  user:any = {name : ""};
  books:any[] = [];
  showAlert: boolean = false;
  alertCls : string = "";
  alertMsg : string = "";
  loginFlag: boolean = false;
  constructor(private userService : UserService,private service: ReaderService,private aService : AuthorService,private router : Router) { 
    this.user = this.userService.user;
    console.log(this.user);
    this.fetchBooks()
  }

  ngOnInit(): void {
  }

  createBook(){
    //let req = {title: data.title, category: data.category, publisher: data.publisher, releasedDate: data.releasedDate}
    this.router.navigate(["createbook"])
  }

  updateBook(){
    this.router.navigate(["updatebook"])
  }

  fetchBooks(){
    this.service.getAllBooksActiveNonActive().subscribe({
          next: (res:any)=>{
              console.log(res);
              this.books = res;
              if(!this.loginFlag){
                this.showAlert = true;
                this.alertCls = "success";
                this.alertMsg = "Login success.";
                this.loginFlag = true;
              }
          },
          error: (err)=>{
              console.log("some error happened")
              console.log(err)
          }
      })
  }
  updateBookStatus(bookid: number,activ: string){
    if(activ.toString().match("true")){
      activ = 'false'
    } else 
      activ = 'true'
    let req = {active: activ}
    let token = this.userService.user.token;
    this.aService.update(token,4,bookid,req)
    .subscribe({
        next: (res:any)=>{
            console.log("Update Books res :",res);
            this.books = res;
            this.showAlert = true;
            this.alertCls = "success";
            this.alertMsg = "Book Updated successfully."
            this.fetchBooks()
        },
        error: (err)=>{
            console.log("some error happened")
            console.log(err)
            this.showAlert = true;
            this.alertCls = "danger";
            this.alertMsg = "Book Updation Failed."
        }
    })
  }

}
