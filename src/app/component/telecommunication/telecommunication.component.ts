import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-telecommunication',
  templateUrl: './telecommunication.component.html',
  styleUrls: ['./telecommunication.component.css'],
})
export class TelecommunicationComponent {
  swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
  });
}
