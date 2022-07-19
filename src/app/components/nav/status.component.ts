import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <ul class="m-0 p-0" [ngClass]="classMenu">

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
  styles: [``]
})
export class StatusComponent implements OnInit {

  @Input() classMenu: String;

  constructor() { }

  ngOnInit(): void {
  }

  commissionStatus = 'Open';
  waitlistStatus = 'September';

}
