import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/14-bootstrap/user.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthorService } from 'src/14-bootstrap/author.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  message:string = "";
  loginForm:FormGroup;
  showAlert: boolean = false;
  alertCls : string = "";
  alertMsg : string = "";

  constructor(private router: Router, private userService: UserService, private authorService: AuthorService) { 
    this.loginForm = new FormGroup({
      username: new FormControl("", [
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

  getLogin(){
    
    console.log(this.loginForm);
    console.log("Value: "+JSON.stringify(this.loginForm.value));
    console.log("Valid: "+this.loginForm.valid)

    if(this.loginForm.valid){
        console.log("Send request to get login");

        let req = {username: this.loginForm.value.username, password: this.loginForm.value.password}
        this.authorService.login(req)
        .subscribe({
            next: (res:any)=>{
                console.log(res);
                this.message = "Success";
                this.showAlert = true;
                this.alertCls = "success";
                this.alertMsg = "Login success."
                this.userService.name = this.loginForm.value.username;
                this.userService.token = res.token;
                this.userService.isValid = true;
                this.loginForm.reset()
                this.router.navigate(["welcome"]);
            },
            error: (err)=>{
                this.message = "Backend Error :"+err;
                this.userService.isValid = false;
                this.showAlert = true;
                this.alertCls = "danger";
                this.alertMsg = "Login failed."
                this.loginForm.reset()
                console.log("some error happened")
                console.log(err)
            }
        })

    } else {
        console.log("Invalid data");
        this.message = "Bad request";
        this.userService.isValid = false;
        this.loginForm.reset()
    }

  }
}
