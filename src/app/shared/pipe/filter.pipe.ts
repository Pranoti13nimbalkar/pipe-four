import { Pipe, PipeTransform } from "@angular/core";
import { IPlayer } from "../models/plaer";


@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform{
   transform(arr: IPlayer[],searchValue: string): IPlayer []{
      if(!searchValue){
        return arr
      }
      if(!arr){
        return []
      }
      let filterArr :IPlayer[]= arr.filter(p=>(p.name.concat(p.role).concat(p.team)).toLowerCase().includes(searchValue.toLowerCase()))
      return filterArr
   }
}