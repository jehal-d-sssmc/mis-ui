import { Component, VERSION } from '@angular/core';
import {environment} from './config';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = `${environment.NAME} ${environment.VERSION}`;
}
