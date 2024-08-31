import { Component } from '@angular/core';
import { SanityService } from 'src/app/services/sanity.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent {
  data: any[] = [];

  constructor(private sanity: SanityService) {}
  ngOnInit(): void {
    // Fetch the fetchClientsData
    this.sanity
      .fetchClientsData()
      .then((fetchedData: any) => {
        if (fetchedData && fetchedData.length > 0) {
          this.data = fetchedData;
          console.log(this.data);
        } else {
          console.error('No data received from fetchClientsData');
        }
      })
      .catch((error) => {
        console.error('Error fetching fetchClientsData:', error);
      });
  }
}
