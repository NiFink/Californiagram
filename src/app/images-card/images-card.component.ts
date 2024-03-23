import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-images-card',
  templateUrl: './images-card.component.html',
  styleUrl: './images-card.component.scss'
})
export class ImagesCardComponent implements OnInit{

  @Input() text: string = "";
  @Input() image: string = "";
  constructor(){}
  ngOnInit(): void {

  }
}
