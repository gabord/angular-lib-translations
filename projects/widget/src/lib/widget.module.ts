import { NgModule } from '@angular/core';
import { WidgetComponent } from './widget.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [WidgetComponent],
  imports: [
    TranslateModule
  ],
  exports: [WidgetComponent]
})
export class WidgetModule { }
