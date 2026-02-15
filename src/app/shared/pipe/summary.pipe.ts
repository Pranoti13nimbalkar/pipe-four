import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name : 'Summary'
})

export class SummaryPipe implements  PipeTransform{

     transform(value: string, limit:number= 10): string {
         return value.substring(0,limit)+ '...'
     }
}