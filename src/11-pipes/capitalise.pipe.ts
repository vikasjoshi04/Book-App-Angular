import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalise'
})
export class CapitalisePipe implements PipeTransform {

  transform(input: string): string {
    return input.split(" ").map(word=>this.capitalizeMe(word)).join(" ")
  }

  capitalizeMe(word:string){
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  }

}
