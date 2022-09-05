import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent], // Components, pipe, directive 
    imports: [BrowserModule, HttpClientModule], // module
    providers: [], // reusable code
    bootstrap: [AppComponent] // starting comp
})
export class AppModule { }