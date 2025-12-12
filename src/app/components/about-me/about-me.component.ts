import { Component, signal, computed } from '@angular/core';

interface Skill {
  category: string;
  icons: string;
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent {
  description = signal('I\'m a Full Stack Web Developer passionate about building and maintaining both the front-end and back-end of websites and web applications, ensuring the success and smooth functioning of the entire product.');
  
  skills = signal<Skill[]>([
    { category: 'Front-End', icons: 'angular,react,html,css,sass,js,ts,jest,reactivex' },
    { category: 'Back-End', icons: 'java,cs,dotnet,spring,mysql,nodejs,py,mongodb' },
    { category: 'Other Skills', icons: 'git,docker,githubactions,aws,vercel' }
  ]);

  resumeUrl = signal('https://drive.usercontent.google.com/u/0/uc?id=1M-zr29R5NAdRkpmLJesRIXQT-3H-nWWH&export=download');
  
  skillsCount = computed(() => this.skills().length);
}
