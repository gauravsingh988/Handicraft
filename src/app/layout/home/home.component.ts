import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 

  // homeslidersec slider
   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin:10,
    nav: true,
    autoplay:true,
    navSpeed: 3000,
    navText: ['<i class="material-icons">chevron_left</i>', '<i class="material-icons">chevron_right</i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    
  }


  videoowloptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin:10,
    nav: true,
    autoplay:true,
    navSpeed: 2000,
    navText: ['<i class="material-icons">chevron_left</i>', '<i class="material-icons">chevron_right</i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    
  }
  
  centerowl: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin:10,
    nav: false,
    autoplay:true,
    navSpeed: 2000,
    navText: ['<i class="material-icons">arrow_back_ios</i>', '<i class="material-icons">arrow_forward_ios</i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    
  }
}

