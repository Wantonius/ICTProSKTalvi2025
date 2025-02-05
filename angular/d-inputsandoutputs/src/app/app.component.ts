import { Component } from '@angular/core';
import {Basket} from './basket.component'

@Component({
  selector: 'app-root',
  imports: [Basket],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'd-inputsandoutputs';
}
