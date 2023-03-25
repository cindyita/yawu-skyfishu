import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  datastatus: any;
  datalinks: any;

  constructor(private data: GetdataService) { }

  ngOnInit(): void {

  }

}
