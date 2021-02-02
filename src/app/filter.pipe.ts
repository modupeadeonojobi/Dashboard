import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allUsers: any[], searchTerm: string): any[] {
   
    if(!allUsers){
      return[];
    }
    if(!searchTerm) {
      return allUsers;
    }
    searchTerm = searchTerm.toLowerCase();

    return allUsers.filter(it => {
      return it.name.first.toLowerCase().includes(searchTerm) 
      || it.name.last.toLowerCase().includes(searchTerm) 
      || it.location.country.toLowerCase().includes(searchTerm)});
// console.log(allUsers)
//       allUsers.forEach((it, index) => 
//          console.log(index+1+" "+ it)
//     )
  }

}




 
