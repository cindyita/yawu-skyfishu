import { Injectable } from '@angular/core';
import { character } from '../models/principal-characters-model/characters-model.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersDataService {

  constructor() { }

  createCharacters:character[] = [

    new character('plant', 'Plant', 'plantkuroba', '', 'plantkuroba', 'plantFont', '#CDDA2F', '#A09C27', '#757769', 1),
    new character('moxxie', 'Moxxie', 'MoxxieSiix', '', 'Moxxiesiix', 'moxxieFont', '#EB9235', '#4E4440','#885D9F', 1),
    new character('caramel', 'Caramel', 'caramelkaiteki', '', 'CaramelKaiteki', 'caramelFont', '#EB9235', '#4E4440', '#885D9F', 1),
    new character('moss', 'Moss', 'Moss', '', 'VirtualMoss', 'mossFont', '#EB9235', '#4E4440', '#885D9F', 0),
    new character('tatsu', 'Tatsu', 'GoldenTatsu', '', 'GoldenTatsu', 'tatsuFont', '#EB9235', '#4E4440', '#885D9F', 0),
    new character('skylar', 'Skylar', 'SkaylarEDM', '', 'SkylarEDM_', 'skylarFont', '#EB9235', '#4E4440', '#885D9F', 0),
    new character('sepharie', 'Sepharie', 'SepharieSteele', '', 'SepharieSteele', 'sepharieFont', '#EB9235', '#4E4440', '#885D9F', 0),
    new character('pisces', 'Pisces', 'piscesAdAstra', '', 'PisciesAdAstra', 'piscesFont', '#EB9235', '#4E4440', '#885D9F', 0),
    new character('synthion', 'Synthion', '', 'Synthion Ch.', 'synthionmusic', 'synthionFont', '#EB9235', '#4E4440', '#885D9F', 0),
    new character('moon', 'Moon', 'inmooncake', '', 'in_mooncake', 'moonFont', '#EB9235', '#4E4440', '#885D9F', 0),
    new character('ryunaru', 'Ryunaru', 'RyuNaruVT', '', 'RyuNaruVT', 'ryunaruFont', '#EB9235', '#4E4440', '#885D9F', 0),
    new character('hugo', 'Hugo', 'hugodemaire', '', 'hugodemaire', 'hugoFont', '#EB9235', '#4E4440', '#885D9F', 0),
    new character('lunar', 'Lunar', 'lunar_reiji', '', 'Lunar_Reiji', 'lunarFont', '#EB9235', '#4E4440', '#885D9F', 0),
    new character('crystal', 'Crystal', 'CrystalPudding', '', 'CrystalPudding', 'crystalFont', '#EB9235', '#4E4440', '#885D9F', 0),
    new character('bubu', 'Bubu', 'bubucore69', '', 'bubucore69', 'bubuFont', '#EB9235', '#4E4440', '#885D9F', 0)

  ];

}
