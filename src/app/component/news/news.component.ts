import { Component, ViewEncapsulation } from '@angular/core';
import { SanityService } from 'src/app/services/sanity.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NewsComponent {
  data: any[] = [];

  constructor(private sanity: SanityService) {}
  // ngOnInit(): void {

  //   this.sanity
  //     .fetchNewsData()
  //     .then((fetchedData: any) => {
  //       if (fetchedData && fetchedData.length > 0) {
  //         this.data = fetchedData;
  //         console.log(this.data);
  //       } else {
  //         console.error('No data received from fetchNewsData');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching news data:', error);
  //     });
  // }
  itemsPerSlide = 5;
  singleSlideOffset = true;

  slides = [
    { image: 'assets/Fiber-11-17-21.jpg' },
    { image: 'assets/team-1.jpg' },
    { image: 'assets/Fiber-11-17-21.jpg' },
    { image: 'assets/alsafa advanced .jpg' },
    { image: 'assets/Fiber-11-17-21.jpg' },
    { image: 'assets/team-1.jpg' },
    { image: 'assets/Fiber-11-17-21.jpg' },
    { image: 'assets/team-1.jpg' },
    { image: 'assets/Fiber-11-17-21.jpg' },
    { image: 'assets/team-1.jpg' },
  ];
}
