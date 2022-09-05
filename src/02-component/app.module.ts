import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ButtonComponent } from "./button/button.component";
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations : [AppComponent, ButtonComponent, HeaderComponent],
    imports : [BrowserModule], //module
    providers : [], //reusable code
    bootstrap : [AppComponent] // starting comp
})

export class AppModule {}