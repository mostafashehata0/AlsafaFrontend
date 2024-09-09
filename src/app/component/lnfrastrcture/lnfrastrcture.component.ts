import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-lnfrastrcture',
  templateUrl: './lnfrastrcture.component.html',
  styleUrls: ['./lnfrastrcture.component.css'],
})
export class LnfrastrctureComponent {
  swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
  });
}
