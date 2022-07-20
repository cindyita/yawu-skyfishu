import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GeturlService } from 'src/app/services/geturl.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  @Output() sendUrl = new EventEmitter<string>();


  constructor(private geturl: GeturlService) { }

  public url:string = '';

  ngOnInit(): void {
    this.url = this.geturl.getUrl();
    this.geturl.actualUrl = this.url;
    console.log(this.url)
  }

}
