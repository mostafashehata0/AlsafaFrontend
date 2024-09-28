import {
  Component,
  ViewEncapsulation,
  HostListener,
  OnInit,
  ChangeDetectorRef,
  TemplateRef,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
  currentLang: string = 'en'; // Default language
  responsiveOptions: any[] | undefined;
  // ==================================on init===================
  ngOnInit(): void {
    this.currentLang = this.translate.currentLang || 'en'; // Set current language
    this.fetchDataFromSanity();
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 1,
      },
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
  fetchDataFromSanity() {
    this.sanity
      .fetchNewsData()
      .then((fetchedData: any) => {
        if (fetchedData && fetchedData.length > 0) {
          // Map the data based on the current language
          this.data = fetchedData.map((item: any) => ({
            ...item,
            title: item.title[this.currentLang], // Use the correct language for title
            description: item.description[this.currentLang], // Use the correct language for description
          }));
        } else {
          console.error('No data received from fetchNewsData');
        }
      })
      .catch((error) => {
        console.error('Error fetching news data:', error);
      });
  }
  // ==================================on init===================
  constructor(
    private sanity: SanityService,
    private modalService: BsModalService,
    private translate: TranslateService
  ) {
    // Subscribe to language changes
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
      this.fetchDataFromSanity(); // Fetch data again when language changes
    });
  }

  // =================modal function
  openModalWithClass(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
}
