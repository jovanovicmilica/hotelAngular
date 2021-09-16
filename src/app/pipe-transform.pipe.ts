import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTransform'
})
export class PipeTransformPipe implements PipeTransform {

  transform(value: any) {
    return value+".00";
  }

}
