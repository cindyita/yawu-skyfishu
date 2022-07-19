import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits',
  template: `
    <p class="credits" [ngClass]="classMenu">
      <a class="d-block">
          {{title}} @ {{year}} Created by
        <a href="https://yawu.art">Yawu.art</a>
      </a>
      
    </p>
  `,
  styles: [`
    .credits a {
      text-decoration: none;
    }
  `]
})
export class CreditsComponent implements OnInit {

  @Input() classMenu: String;

  constructor() { }

  ngOnInit(): void {
  }

  title = 'skyfishu';
  year = 2022;

}
