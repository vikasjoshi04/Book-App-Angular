import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { UtilsService } from "./utils.service";

@NgModule({
    declarations: [AppComponent, Comp1Component, Comp2Component], // Components, pipe, directive 
    imports: [BrowserModule], // module
    // providers: [UtilService], // reusable code
    bootstrap: [AppComponent] // starting comp
})
export class AppModule { }