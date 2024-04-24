import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  @Output() content = new EventEmitter();

  senddata()
  {
    this.content.emit(this)
  }
}
