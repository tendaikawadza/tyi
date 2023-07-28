import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalise",
})
export class CapitalisePipe implements PipeTransform {
  transform(value: string): string {
    const words = value.split(" ");
    for (let i = 0; i < words.length; i++)
      words[i] = `${words[i].charAt(0).toUpperCase()}${words[i].substring(1)}`;
    return words.join(" ");
  }
}
