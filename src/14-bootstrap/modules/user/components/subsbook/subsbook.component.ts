import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReaderService } from 'src/14-bootstrap/reader.service';

@Component({
  selector: 'app-subsbook',
  templateUrl: './subsbook.component.html',
  styleUrls: ['./subsbook.component.sass']
})
export class SubsbookComponent implements OnInit {

  reader:any = {id: "",name: ""};

  constructor(private service : ReaderService, private router : Router) {
    this.reader = this.service.book;
    this.service.u = {};
    console.log("Subs Book constructor Service :",JSON.stringify(this.reader));
  }

  ngOnInit(): void {
  }

  subscribeBook(data:any){
    let req = {bookId: data.bookId, name: data.name, email: data.email}
    //console.log('req :',req);
    this.service.subscribeBook(req)
    .subscribe({
        next: (res:any)=>{
            console.log("subscribe res :",res.email);
            this.service.email = res.email;
            this.router.navigate(["viewallsubsbooks"])
        },
        error: (err)=>{
            console.log("some error happened")
            console.log(err)
        }
    })
  }

  viewAllSubscribeBooks(){
    this.router.navigate(["viewallsubsbooks"])
  }

}
