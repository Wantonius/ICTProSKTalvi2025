import { Component } from '@angular/core';
import {ReactiveForm} from './reactiveform.component';

@Component({
  selector: 'app-root',
  imports: [ReactiveForm],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'f-reactive_form';
}
