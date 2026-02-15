import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'wordLimit'
})

export class WordLimitPipe implements PipeTransform{

    transform(value: string, limit:number = 10) : string{
        return value.split(' ').splice(0,limit).join(' ') + '...'
    }
}