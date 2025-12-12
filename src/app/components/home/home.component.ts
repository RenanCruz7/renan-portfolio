import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = signal('RENAN CRUZ');
  title = signal('Creative Frontend Developer');
  description = signal('A Creative Frontend Developer crafting and optimizing Websites and Web Applications to enhance user experience and drive product success.');
}
