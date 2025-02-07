import { Component } from '@angular/core';
import {CapitalizePipe} from './capitalize.pipe'


@Component({
  selector: 'app-root',
  imports: [CapitalizePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'l-pipes';
}
