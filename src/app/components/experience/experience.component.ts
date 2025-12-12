import { Component, signal, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  translationService = inject(TranslationService);
  experiences = signal<Experience[]>([]);
  isLoading = signal(false);

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
