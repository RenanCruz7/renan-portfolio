import { Component, signal } from '@angular/core';

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
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = signal<Experience[]>([]);
  isLoading = signal(false);
}
