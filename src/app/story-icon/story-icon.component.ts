import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-story-icon',
  templateUrl: './story-icon.component.html',
  styleUrl: './story-icon.component.scss'
})
export class StoryIconComponent {

  @Input() name: string = "";
  @Input() storyImages: string = "";
}
