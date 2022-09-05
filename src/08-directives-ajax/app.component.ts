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
        // setTimeout(this.fetchMovies.bind(this), 5000);
        this.fetchMovies();
    }

    createMovie(){
        let movie = {title: "Babaji", director: "babaji", rating: 1.1}
        this.service.create(movie)
        .subscribe({
            next: (res:any)=>{
                console.log(res);
                this.fetchMovies();
            },
            error: (err)=>{
                console.log("some error happened")
                console.log(err)
            }
        })
    }

    fetchMovies(){
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

    deleteMovie(id: number){
       this.service.remove(id).subscribe({
        next:(res: any)=>{
            console.log("Deleted :",res);
            this.fetchMovies();
        },
        error: (err)=>{
            console.log("Some error in deleting movies");
            console.log(err);
            
        }
       }) 
    }
}