import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name: 'decimal'
})
export class PercentageShorten implements PipeTransform {
    transform(value: any) {
      
       // var dateString = "\/Date(" + value + ")\/".substr(6);
       var numb = value;
        numb= numb.toFixed(2);
        return numb;

    }
}