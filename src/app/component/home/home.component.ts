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

  products: any[] = [
    { src: '/assets/images.jpeg', info: 'construction' },
    { src: '/assets/Telecom2_2000x1000.png', info: 'Telecommunication' },
    {
      src: '/assets/picture1.jpg',
      info: 'Electricty and Alectromechanis',
    },
    {
      src: '/assets/High-Density-Polyethylene-HDPE-Trenchless-Pipes-For-HDDHorizontal-Directional-Drilling-6.jpg',
      info: 'HDD (Direciana Drilling)',
    },
    {
      src: '/assets/infrastructure_montage_shutterstock.jpg',
      info: 'Lnfrastrcture',
    },
  ];

  responsiveOptions: any[] | undefined;
  ngOnInit() {
    console.log(this.products);

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
