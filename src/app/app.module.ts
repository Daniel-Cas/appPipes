import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VentasModule } from './ventas/ventas.module';


//Cambiar el locale de la APP
import localeEs from '@angular/common/locales/es-CO';
import localeKr from '@angular/common/locales/ko'

import { registerLocaleData } from '@angular/common'


registerLocaleData( localeEs );
registerLocaleData( localeKr );




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
