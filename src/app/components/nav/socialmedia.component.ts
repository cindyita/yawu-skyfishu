import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-socialmedia',
  template: `
    <ul class="m-0 p-0" [ngClass]="classMenu">
      <li>
        <a href="https://twitter.com/skyfishu">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="https://twitch.tv/skyfishu">
          <i class="fa-brands fa-twitch"></i>
        </a>
      </li>
      <li>
        <a href="mailto:xskyfishx@gmail.com">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </li>
    </ul>
  `,
  styles: [``]
})
export class SocialmediaComponent implements OnInit {

  @Input() classMenu: String;

  constructor() { }

  ngOnInit(): void {
  }

}
