import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  imagesText =[
    'Malibu, December 24th 2022',
    'Ventura, December 24th 2022',  
    'Dinosaur Caves Park, December 25th 2022',
    'Morro Bay Dog Beach, December 25th 2022',
    'Little Norway, December 26th 2022',
    'San Francisco, December 27th 2022',  
    'Yosemite National Park, December 29th 2022',
    'Las Vegas, January 2st 2022',
    'Las Vegas, January 2st 2022'
  ];
  images =[
    'assets/Images/California/1.jpg',
    'assets/Images/California/2.jpg',
    'assets/Images/California/3.jpg',
    'assets/Images/California/4.jpg',
    'assets/Images/California/5.jpg',
    'assets/Images/California/6.jpg',
    'assets/Images/California/7.jpg',
    'assets/Images/California/8.jpg',
    'assets/Images/California/9.jpg'
  ];
}
