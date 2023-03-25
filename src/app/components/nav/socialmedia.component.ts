import { Component, Input, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-socialmedia',
  template: `
    <ul class="m-0 p-0" [ngClass]="classMenu">
      <li *ngIf="twitter">
        <a href="https://twitter.com/{{twitter}}">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </li>
      <li *ngIf="twitch">
        <a href="https://twitch.tv/{{twitch}}">
          <i class="fa-brands fa-twitch"></i>
        </a>
      </li>
      <li *ngIf="email">
        <a href="mailto:{{email}}">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </li>
    </ul>
  `,
  styles: [``]
})
export class SocialmediaComponent implements OnInit {

  @Input() classMenu: String;
  twitter: string;
  twitch: string;
  email: string;

  constructor(private data: GetdataService) { }

  ngOnInit(): void {
    this.data.getLinks().subscribe((res) => {
      this.twitter = res[0].twitter;
      this.twitch = res[0].twitch;
      this.email = res[0].email;
    });
  }

}
