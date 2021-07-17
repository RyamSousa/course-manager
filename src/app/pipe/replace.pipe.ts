import { Pipe, PipeTransform } from "@angular/core";

// Pipe is used for alter data show

@Pipe({
  name: 'replace',
})
export class ReplacePipe implements PipeTransform {

  transform(value: string, char: string, valueToReplace: string) {
    return value.replace(char, valueToReplace);
  }
}
