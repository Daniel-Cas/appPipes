import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';



@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
