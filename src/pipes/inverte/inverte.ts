import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the InvertePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'inverte',
  pure: false
})
export class InvertePipe implements PipeTransform {

  transform (values) {
    if (values) {
      return values.reverse();
    }
  }
}
