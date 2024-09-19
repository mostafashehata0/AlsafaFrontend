import {
  Component,
  HostListener,
  ChangeDetectorRef,
  ViewEncapsulation,
} from '@angular/core';
import { SanityService } from 'src/app/services/sanity.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomersComponent {
  data: any[] = [];

  itemsPerSlide!: number;
  slidesNumber!: number;
  showCarousel = true; // Add this flag to control the visibility of the carousel

  singleSlideOffset = true;

  responsiveOptions: any[] | undefined;

  constructor(private sanity: SanityService, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.checkScreenSize(window.innerWidth);
    // Fetch the fetchClientsData
    this.sanity
      .fetchClientsData()
      .then((fetchedData: any) => {
        if (fetchedData && fetchedData.length > 0) {
          this.data = fetchedData;
        } else {
          console.error('No data received from fetchClientsData');
        }
      })
      .catch((error) => {
        console.error('Error fetching fetchClientsData:', error);
      });
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
