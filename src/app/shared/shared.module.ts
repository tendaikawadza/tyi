import { NgModule } from '@angular/core';

import { CamelParsePipe, CapitalisePipe, SnakeParsePipe, ZwLocaleDatePipe } from "./pipes";


@NgModule({
  declarations: [CamelParsePipe, ZwLocaleDatePipe, SnakeParsePipe, CapitalisePipe],
  exports: [CamelParsePipe, ZwLocaleDatePipe, SnakeParsePipe, CapitalisePipe],
})

export class SharedModule { }
