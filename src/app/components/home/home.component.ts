import { Component, signal, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  translationService = inject(TranslationService);
  name = signal('RENAN CRUZ');
  title = signal('Creative Frontend Developer');
  description = signal('A Creative Frontend Developer crafting and optimizing Websites and Web Applications to enhance user experience and drive product success.');

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
