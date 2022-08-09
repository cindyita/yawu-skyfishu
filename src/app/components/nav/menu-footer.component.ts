import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-footer',
  template: `
    <nav [ngClass]="classMenu">
      <!----<a class="nav-link" [routerLink]="['/privacypolicy']">Política de privacidad</a>--->
      <a class="nav-link" [routerLink]="['/webconditions']">Terms and conditions</a>
      <!--<a class="nav-link" [routerLink]="['/contact']">Contact</a>-->
    </nav>
  `,
  styles: [``]
})
export class MenuFooterComponent implements OnInit {

  @Input() classMenu: String;

  constructor() { }

  ngOnInit(): void {
  }

}
