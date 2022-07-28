import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCharacterPortfolio'
})
export class FilterCharacterPortfolioPipe implements PipeTransform {

  transform(values: any[], ...args: unknown[]): any[] {
    return values.filter(v => v.principal == false);
  }

}
