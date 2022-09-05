import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ButtonComponent } from "./button/button.component";

@NgModule({
    declarations : [AppComponent, ButtonComponent],
    imports : [BrowserModule], //module
    providers : [], //reusable code
    bootstrap : [AppComponent] // starting comp
})

export class AppModule {}