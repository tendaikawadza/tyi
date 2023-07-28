import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {routes} from "./shell.routes";
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLineModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MenuItemComponent],
  imports: [
    CommonModule,
   RouterModule.forChild(routes),    
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatLineModule,    
    MatButtonModule,
    MatLineModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatListModule,
    MatSidenavModule
  ],
})
export class ShellModule { }
