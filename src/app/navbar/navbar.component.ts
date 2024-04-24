import { Component ,Output,EventEmitter } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Output() content = new EventEmitter();

  sendData(name:any)
  {
   
    this.content.emit(name)

  }
}
