import { Component} from '@angular/core';
import { GeturlService } from 'src/app/services/geturl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'skyfishu';
  public href: string = "hola";

  constructor(private geturl: GeturlService) {
    this.href = this.geturl.actualUrl;
  }


}
