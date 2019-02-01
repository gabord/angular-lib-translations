import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-widget',
  template: `
    <p>
      {{'lib.hello' | translate}}
    </p>
  `,
  styles: []
})
export class WidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
