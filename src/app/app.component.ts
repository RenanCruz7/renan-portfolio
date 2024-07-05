import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { AboutMeComponent } from './components/about-me/about-me.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent,AboutMeComponent]
})
export class AppComponent {
  title = 'renan-portfolio';
}
