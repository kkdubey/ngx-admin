import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name: 'shorten'
})
export class ShortenDate implements PipeTransform {
    transform(value: any) {
      
       // var dateString = "\/Date(" + value + ")\/".substr(6);
        var currentTime = new Date(value);
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        var creationDate = day + "/" + month + "/" + year;


        return creationDate;

    }
}