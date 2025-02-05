import { Component } from '@angular/core';
import {Conditional} from './conditional.component';
import {PersonList} from './personlist.component';

@Component({
  selector: 'app-root',
  imports: [Conditional,PersonList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'b-built_in_directives';
}
