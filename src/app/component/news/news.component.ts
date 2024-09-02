import {
  Component,
  ViewEncapsulation,
  HostListener,
  OnInit,
  ChangeDetectorRef,
  TemplateRef,
} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SanityService } from 'src/app/services/sanity.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NewsComponent implements OnInit {
  modalRef?: BsModalRef;
  data: any[] = [];
  itemsPerSlide!: number;
  slidesNumber!: number;
  showCarousel = true; // Add this flag to control the visibility of the carousel

  singleSlideOffset = true;
  ngOnInit(): void {
    this.checkScreenSize(window.innerWidth);
    this.sanity
      .fetchNewsData()
      .then((fetchedData: any) => {
        if (fetchedData && fetchedData.length > 0) {
          this.data = fetchedData;
        } else {
          console.error('No data received from fetchNewsData');
        }
      })
      .catch((error) => {
        console.error('Error fetching news data:', error);
      });
  }

  constructor(
    private sanity: SanityService,
    private cdr: ChangeDetectorRef,
    private modalService: BsModalService
  ) {}

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
  // =================modal function
  openModalWithClass(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
}
