import { Component, signal, computed, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  translationService = inject(TranslationService);
  projects = signal<Project[]>([]);
  filter = signal<string>('all');
  
  filteredProjects = computed(() => {
    const filterValue = this.filter();
    if (filterValue === 'all') return this.projects();
    return this.projects().filter(p => 
      p.technologies.some(tech => tech.toLowerCase().includes(filterValue.toLowerCase()))
    );
  });

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
