import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-electricty',
  templateUrl: './electricty.component.html',
  styleUrls: ['./electricty.component.css'],
})
export class ElectrictyComponent {
  swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
  });
}
