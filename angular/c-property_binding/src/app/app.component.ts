import { Component } from '@angular/core';
import {BindingExample} from './bindingexample.component';
@Component({
  selector: 'app-root',
  imports: [BindingExample],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'c-property_binding';
}
