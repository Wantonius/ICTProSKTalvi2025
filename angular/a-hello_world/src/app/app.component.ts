import { Component } from '@angular/core';
import { HelloWorld } from './helloworld.component'

@Component({
  selector: 'app-root',
  imports: [HelloWorld],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'a-hello_world';
}
