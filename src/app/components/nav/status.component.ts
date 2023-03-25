import { Component, Input, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-status',
  template: `
    <ul class="statuscommissions m-0 p-0" [ngClass]="classMenu">

      <a [ngClass]="{'d-none': commissionStatus == ''}">
        <li>
          <p>Commissions: <b>{{commissionStatus}}</b></p>
        </li>
      </a>

      <a [ngClass]="{'d-none': waitlistStatus == ''}">
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
  commissionStatus: string = 'Open';
  waitlistStatus: string = '';

  constructor(private data: GetdataService) { }

  ngOnInit(): void {
    this.data.getStatus().subscribe((res) => {
      this.commissionStatus = res[0].commissions;
      this.waitlistStatus = res[0].waitlist;
    });
  }


}
