import { Component, signal, computed, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

interface Skill {
  category: string;
  icons: string;
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent {
  translationService = inject(TranslationService);
  description = signal('I\'m a Full Stack Web Developer passionate about building and maintaining both the front-end and back-end of websites and web applications, ensuring the success and smooth functioning of the entire product.');
  
  skills = signal<Skill[]>([
    { category: 'Front-End', icons: 'angular,react,html,css,sass,js,ts,jest,reactivex' },
    { category: 'Back-End', icons: 'java,cs,dotnet,spring,mysql,nodejs,py,mongodb' },
    { category: 'Other Skills', icons: 'git,docker,githubactions,aws,vercel' }
  ]);

  resumeUrl = signal('https://drive.usercontent.google.com/u/0/uc?id=1M-zr29R5NAdRkpmLJesRIXQT-3H-nWWH&export=download');
  
  skillsCount = computed(() => this.skills().length);

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
