import { Component, signal, computed } from '@angular/core';

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
  imports: [],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = signal<Project[]>([]);
  filter = signal<string>('all');
  
  filteredProjects = computed(() => {
    const filterValue = this.filter();
    if (filterValue === 'all') return this.projects();
    return this.projects().filter(p => 
      p.technologies.some(tech => tech.toLowerCase().includes(filterValue.toLowerCase()))
    );
  });
}
