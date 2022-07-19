import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-footer',
  template: `
    <nav [ngClass]="classMenu">
      <a href="">Política de privacidad</a>
      <a href="">Términos y condiciones de la web</a>
      <a href="">Contacto</a>
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
