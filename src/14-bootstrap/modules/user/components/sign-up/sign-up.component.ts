import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthorService } from 'src/14-bootstrap/author.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  message:string = "";
  loginForm:FormGroup;
  showAlert: boolean = false;
  alertCls : string = "";
  alertMsg : string = "";

  constructor(private router: Router, private authorService: AuthorService) {
    this.loginForm = new FormGroup({
      username: new FormControl("", [
          Validators.required,
          Validators.minLength(5)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(5)
      ]), 
      password: new FormControl("", [
          // Validators.pattern(""),
          Validators.required,
          // Validators.maxLength(10),
          // Validators.minLength(5)
      ])
    });
  }

  ngOnInit(): void {
  }

  getSignUp(){
    
    console.log(this.loginForm);
    console.log("Value: "+JSON.stringify(this.loginForm.value));
    console.log("Valid: "+this.loginForm.valid)

    if(this.loginForm.valid){
        console.log("Send request to get sign up");

        let req = {name: this.loginForm.value.username, email: this.loginForm.value.email, password: this.loginForm.value.password}
        this.authorService.signUp(req)
        .subscribe({
            next: (res:any)=>{
                console.log(res);
                this.message = "Success";
                this.showAlert = true;
                this.alertCls = "success";
                this.alertMsg = "SignUp success."
                this.loginForm.reset()
                //this.router.navigate(["login"]);
            },
            error: (err)=>{
                this.message = "Backend Error :"+err;
                this.showAlert = true;
                this.alertCls = "danger";
                this.alertMsg = "SignUp failed."
                this.loginForm.reset()
                console.log("some error happened")
                console.log(err)
            }
        })

    } else {
        console.log("Invalid data");
        this.message = "Bad request";
        this.loginForm.reset()
    }

  }

}
