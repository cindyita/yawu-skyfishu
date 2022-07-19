import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits',
  template: `
    <p [ngClass]="classMenu">
      {{title}} @ {{year}} Created by
      <a href="https://yawu.art">Yawu.art</a>
    </p>
  `,
  styles: [``]
})
export class CreditsComponent implements OnInit {

  @Input() classMenu: String;

  constructor() { }

  ngOnInit(): void {
  }

  title = 'skyfishu';
  year = 2022;

}
