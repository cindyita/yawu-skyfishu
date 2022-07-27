import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrincipal'
})
export class FilterPrincipalPipe implements PipeTransform {

  transform(values: any[], ...args: unknown[]): any[] {
    return values.filter(v => v.principal == true);
  }

}
