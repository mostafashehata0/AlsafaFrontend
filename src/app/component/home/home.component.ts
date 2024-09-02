import {
  Component,
  OnInit,
  HostListener,
  ChangeDetectorRef,
  ViewEncapsulation,
  TemplateRef,
} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  modalRef?: BsModalRef;
  data: any[] = [];
  itemsPerSlide!: number;
  slidesNumber!: number;
  showCarousel = true; // Add this flag to control the visibility of the carousel

  singleSlideOffset = true;

  slides = [
    { image: 'assets/Fiber-11-17-21.jpg' },
    { image: 'assets/fiber-optic-03.jpg' },
    { image: 'assets/constructmanagementbanner.png' },
    { image: 'assets/Fiber-11-17-21.jpg' },
    { image: 'assets/fiber-optic-03.jpg' },
    { image: 'assets/constructmanagementbanner.png' },
    { image: 'assets/Fiber-11-17-21.jpg' },
    { image: 'assets/fiber-optic-03.jpg' },
    { image: 'assets/constructmanagementbanner.png' },
    { image: 'assets/Fiber-11-17-21.jpg' },
  ];

  ngOnInit(): void {
    this.checkScreenSize(window.innerWidth);
  }

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize(event.target.innerWidth);
  }

  checkScreenSize(width: number) {
    if (width > 1000) {
      this.itemsPerSlide = 4;
    } else if (width <= 1000 && width > 800) {
      this.itemsPerSlide = 3;
    } else if (width <= 800 && width > 600) {
      this.itemsPerSlide = 2;
    } else this.itemsPerSlide = 1;

    this.sendItemsPerSlide();
  }

  sendItemsPerSlide() {
    this.slidesNumber = this.itemsPerSlide;

    // Temporarily hide the carousel and then show it again to force re-render
    this.showCarousel = false;
    this.cdr.detectChanges(); // Ensure Angular processes this change
    this.showCarousel = true;
    this.cdr.detectChanges(); // Trigger change detection again
  }
}
