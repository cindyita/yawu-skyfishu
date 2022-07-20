import { Component} from '@angular/core';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'skyfishu';
  currentRoute: any;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url;
        console.log(event);
      });
  }

  getHome() {
    if (this.currentRoute == '/' || this.currentRoute == '/home'){
      return 'fontHome';
    }
    return '';
  }


}
