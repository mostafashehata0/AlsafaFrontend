import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
  switchLanguge(language: string) {
    this.translate.use(language);
  }
  navbarScrolled = false;
  // isHomePage: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 50) {
      this.navbarScrolled = true;
    } else {
      this.navbarScrolled = false;
    }
  }
  // constructor(private router: Router) {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       this.isHomePage = this.router.url === '/home';
  //       console.log(this.isHomePage); // For debugging
  //     }
  //   });
  // }
}
