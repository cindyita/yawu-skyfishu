import { Component, OnInit } from '@angular/core';
import { character } from 'src/app/models/principal-characters-model/characters-model.model';
import { CharactersDataService } from 'src/app/services/characters-data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  characters:character[] = [];
  forFilterPrincipal = false;

  constructor(private dataCharacters:CharactersDataService) { 

    this.characters = this.dataCharacters.createCharacters;

  }

  ngOnInit(): void {
  }


}
