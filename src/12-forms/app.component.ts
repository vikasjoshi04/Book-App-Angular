import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: [`app.component.sass`]
})
export class AppComponent { 
    loginForm:FormGroup;

    constructor(){
        this.loginForm = new FormGroup({
            user: new FormControl("", [
                Validators.required,
                Validators.maxLength(13)
            ]),
            pwd: new FormControl("")
        })
    }

    getLogin(){
        console.log("login method")
        console.log(this.loginForm.value)
    }
}