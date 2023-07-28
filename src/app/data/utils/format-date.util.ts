import { DatePipe } from "@angular/common";

export function formatDate(date: Date | string, format: string = "dd-MM-yyyy"): string {
  return String(new DatePipe("en-ZW").transform(date, format));
}
