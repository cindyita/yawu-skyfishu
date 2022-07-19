import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-primary',
  template: `
    <ul class="d-flex flex-lg-row flex-column m-0 p-0" [ngClass]="classMenu">

      <a class="nav-link" [routerLink]="['/aboutme']" [routerLinkActive]="['actived']">
        <li>
          <p>About me</p>
        </li>
      </a>

      <a class="nav-link" [routerLink]="['/commissions']" [routerLinkActive]="['actived']">
        <li>
          <p>Commissions</p>
        </li>
      </a>

      <a class="nav-link" [routerLink]="['/portfolio']" [routerLinkActive]="['actived']">
        <li>
          <p>Portfolio</p>
        </li>
      </a>

      <a class="nav-link" [routerLink]="['/tos']" [routerLinkActive]="['actived']">
        <li>
          <p>T.O.S.</p>
        </li>
      </a>

    </ul>
  `,
  styles: [`
    ul a li p {
      font-weight: bold;
    }
  `]
})
export class MenuPrimaryComponent implements OnInit {

  @Input() classMenu: String;

  constructor() { }

  ngOnInit(): void {
  }

}
