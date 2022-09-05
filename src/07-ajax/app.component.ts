import { Component } from "@angular/core";
import { MovieService } from "./movie.service";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: [`app.component.sass`]
})
export class AppComponent { 
    movies:any[] = []; 

    constructor(private service:MovieService){
        this.service.getAll().subscribe({
            next: (res:any)=>{
                console.log(res);
                this.movies = res;
            },
            error: (err)=>{
                console.log("some error happened")
                console.log(err)
            }
        })
    }
}