import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeturlService {

  public href: string = "";

  constructor(private router: Router) { }

  getUrl() {
    this.href = this.router.url;
    return this.router.url;
  }

}
