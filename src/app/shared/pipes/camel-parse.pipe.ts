import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "camelparse",
})
export class CamelParsePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/([A-Z])/g, " $1");
  }
}
