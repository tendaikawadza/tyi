import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "snakeparse",
})
export class SnakeParsePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return "";
    return value.split("_").join(" ").toLowerCase();
  }
}
