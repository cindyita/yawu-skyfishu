import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCharacterPortfolio'
})
export class FilterCharacterPortfolioPipe implements PipeTransform {

  transform(value: any, char: string): any {
    var charActual = char;
    return value.filter(v => v.principal == true && charActual != v.name);
  }

}
