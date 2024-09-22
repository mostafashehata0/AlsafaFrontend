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
}
