import { Component } from "@angular/core";

@Component({
    selector : "app-root",
    templateUrl : "app.component.html",
    styleUrls : [`app.component.sass`]
  })

  export class AppComponent {
    subject:string = "java";

    changeSubject(arg:string){
      this.subject = arg;
    }
  }