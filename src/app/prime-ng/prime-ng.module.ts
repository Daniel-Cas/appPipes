import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
