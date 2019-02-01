import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetModule } from 'projects/widget/src/public_api';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { FactoryTranslateLoader } from './factory-translate-loader.service';
import { ServiceTranslateLoader } from './service-translate-loader.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WidgetModule,
    TranslateModule.forRoot({loader: {
      provide: TranslateLoader,
      useExisting: ServiceTranslateLoader
    }}),
    TranslateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
