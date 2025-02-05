import { Component } from '@angular/core';
import {Conditional} from './conditional.component';

@Component({
  selector: 'app-root',
  imports: [Conditional],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'b-built_in_directives';
}
