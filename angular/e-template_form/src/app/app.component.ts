import { Component } from '@angular/core';
import {TemplateForm} from './components/templateform.component'

@Component({
  selector: 'app-root',
  imports: [TemplateForm],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-template_form';
}
