import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-root",
    templateUrl: `app.component.html`,
    styleUrls: [`app.component.scss`]
})
export class AppComponent {

    message:string = "";
    loginForm:FormGroup;

    constructor(){
        this.loginForm = new FormGroup({
            username: new FormControl("", [
                Validators.required,
                Validators.minLength(5)
            ]), 
            password: new FormControl("", [
                // Validators.pattern(""),
                // Validators.required,
                // Validators.maxLength(10),
                // Validators.minLength(5)
            ])
        });
    }

    getLogin(){
        console.log(this.loginForm);
        console.log("Value: "+JSON.stringify(this.loginForm.value));
        console.log("Valid: "+this.loginForm.valid)

        if(this.loginForm.valid){
            console.log("Send request to get login");
            this.message = "";
            this.loginForm.reset()
        } else {
            console.log("Invalid data");
            this.message = "Bad request";
        }
    }

}