import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent], // @Pipe/@Directive/@Component
    imports: [BrowserModule, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule { }