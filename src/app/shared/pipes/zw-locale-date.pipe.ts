import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "zwLocaleDate",
})
export class ZwLocaleDatePipe implements PipeTransform {
  transform(value: string): string {
    const _ = value.split("/");
    return [_[1], _[0], _[2]].join("/");
  }
}
