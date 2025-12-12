import { Component, signal, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  activeSection = signal('home');
  translationService = inject(TranslationService);

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    this.activeSection.set(sectionId);
    this.isMenuOpen.set(false);
  }

  switchLanguage(): void {
    const newLang = this.translationService.currentLang() === 'en' ? 'pt' : 'en';
    this.translationService.setLanguage(newLang);
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
