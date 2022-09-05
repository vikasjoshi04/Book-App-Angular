import { Injectable } from "@angular/core";


// add to module
@Injectable({providedIn: "root"})
export class UtilService{
    data:any = {
        result: 0
    }

    add(n:number, m:number):void{
        console.log(`adding ${n} and ${m} in service`)
        this.data.result = n+m;
    }
}
