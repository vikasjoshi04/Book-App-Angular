import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule,Routes } from "@angular/router";
import { UserModule } from "./modules/user/user.module";

const route:Routes = [
    {path:"home", component:HomeComponent},
    {path:"contact", component:ContactComponent},
    {path:"*",redirectTo: "home"}
]

@NgModule({
    declarations : [AppComponent, HeaderComponent, FooterComponent, ContactComponent, HomeComponent],
    imports : [BrowserModule,RouterModule.forRoot(route), UserModule], //module
    providers : [], //reusable code
    bootstrap : [AppComponent] // starting comp
})

export class AppModule {}