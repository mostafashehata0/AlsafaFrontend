import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AlsafaFrontend';
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
  switchLanguge(language: string) {
    this.translate.use(language);
  }
}
