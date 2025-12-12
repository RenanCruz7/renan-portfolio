import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  activeSection = signal('home');

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    this.activeSection.set(sectionId);
    this.isMenuOpen.set(false);
  }
}
