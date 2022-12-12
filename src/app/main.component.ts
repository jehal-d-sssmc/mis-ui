import { Component, Input } from '@angular/core';

@Component({
  selector: 'main',
  template: `<h1>{{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class MainComponent {
  @Input() name: string;
}
