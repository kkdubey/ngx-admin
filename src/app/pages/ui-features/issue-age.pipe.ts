import { PipeTransform, Pipe } from '@angular/core';
import { min } from 'rxjs/operators';
@Pipe({
    name: 'issue_age'
})
export class CalculateAge implements PipeTransform {
    transform(value: any) {
      var today=new Date();
      var cdate=new Date(value);
      console.log(cdate);
      console.log(today);
    

        var minutes = Math.abs(today.getMinutes()-cdate.getMinutes());

        var hours = Math.abs(today.getHours()-cdate.getHours());

        var days = Math.abs(today.getDate()-cdate.getDate());

        if(minutes>60){
            hours=hours + minutes/60;
            minutes=minutes%60;
            if(hours>24){
                days=days+hours/24;
                hours=hours%24;
            }
        }
           
        
        return days+" days "+hours+" hrs "+minutes+" mins" ;
    }
}