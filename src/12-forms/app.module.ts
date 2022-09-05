import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent], // Components, pipe, directive 
    imports: [BrowserModule, ReactiveFormsModule], // module
    providers: [], // reusable code
    bootstrap: [AppComponent] // starting comp
})
export class AppModule { }