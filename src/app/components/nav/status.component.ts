import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <ul class="statuscommissions m-0 p-0" [ngClass]="classMenu">

      <a class="nav-link">
        <li>
          <p>Commissions: <b>{{commissionStatus}}</b></p>
        </li>
      </a>

      <a class="nav-link">
        <li>
          <p>Waitlist: <b>{{waitlistStatus}}</b></p>
        </li>
      </a>

    </ul>
  `,
  styles: [`
  .statuscommissions a li:hover {
    background-color: var(--secondaryLight);
    cursor:default;
  }
  .statuscommissions a p{
    cursor:default;
  }
  `]
})
export class StatusComponent implements OnInit {

  @Input() classMenu: String;

  constructor() { }

  ngOnInit(): void {
  }

  commissionStatus = 'Open';
  waitlistStatus = 'September';

}
