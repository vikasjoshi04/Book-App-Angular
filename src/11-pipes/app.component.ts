import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-root",
    templateUrl: `app.component.html`,
    styleUrls: [`app.component.scss`]
})
export class AppComponent {
    books:any[] = [
        {title: "Superman", price: 26.7, author: "Tim"},
        {title: "Shaktiman", price: 16.9, author: "Mukesh"},
    ]

    address: string = "h.No. 24, eve sTreet, park evenue, goLden building near mEga mart";
    dob:Date = new Date(2022, 6, 22);

    name: string = "taRkeSH War nAtH PanDey";
}