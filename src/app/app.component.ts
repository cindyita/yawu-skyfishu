import { Component} from '@angular/core';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { GetdataService } from './services/getdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'skyfishu';
  currentRoute: any;
  maintenanceStatus: string;

  constructor(private router: Router,private data: GetdataService) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url;
      });
    
    this.data.getStatus().subscribe((res) => {
      this.maintenanceStatus = res[0].maintenance;
      console.log(this.maintenanceStatus);
    });
  }

  getHome() {
    if (this.currentRoute == '/' || this.currentRoute == '/home'){
      return 'fontHome';
    }
    return '';
  }


}
