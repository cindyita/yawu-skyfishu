import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socialmedia',
  template: `
    <ul class="m-0 p-0">
      <li>
        <a href="#">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-brands fa-twitch"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </li>
    </ul>
  `,
  styles: [``]
})
export class SocialmediaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
