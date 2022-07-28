import { Injectable } from '@angular/core';
import { character } from '../models/principal-characters-model/characters-model.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersDataService {

  constructor() { }

  createCharacters:character[] = [

    /*
    img:string, name:string, twitchLink:string, youtubeLink:string, twitterLink:string, font:string, colorPrimary:string, colorSecondary:string, colorTertiary:string,principal:number
    */
    new character('iumi', 'iumi', 'iumi', '', 'iumi', 'iumiFont', 'G', '#F5A0AC', '#C0E9F5', '#9CC2DC', true),
    new character('moxxie', 'Moxxie', 'MoxxieSiix', '', 'Moxxiesiix', 'moxxieFont', 'G', '#4E4440', '#EB9235','#885D9F', true),
    new character('skylar', 'Skylar', 'SkaylarEDM', '', 'SkylarEDM_', 'skylarFont', 'G', '#DB5855', '#DB5855', '#565253', true),
    new character('tatsu', 'Tatsu', 'GoldenTatsu', '', 'GoldenTatsu', 'tatsuFont', 'G', '#E74F41', '#E74F41', '#FE8862', true),
    new character('moss', 'Moss', 'Moss', '', 'VirtualMoss', 'mossFont', 'G', '#A9D96D', '#A9D96D', '#E49AEC', true),
    new character('caramel', 'Caramel', 'caramelkaiteki', '', 'CaramelKaiteki', 'caramelFont', 'G', '#565252', '#484545', '#ECBF78', true),
    new character('sepharie', 'Sepharie', 'SepharieSteele', '', 'SepharieSteele', 'sepharieFont','G', '#393143', '#7A53AC', '#49C361', false),
    new character('pisces', 'Pisces', 'piscesAdAstra', '', 'PisciesAdAstra', 'piscesFont','G', '#6C99D6', '#6C99D6', '#D8A36C', false),
    new character('synthion', 'Synthion', '', 'Synthion Ch.', 'synthionmusic', 'synthionFont', 'M', '#5B65BC', '#5B65BC', '#DB5855', false),
    new character('moon', 'Moon', 'inmooncake', '', 'in_mooncake', 'moonFont', 'G', '#49E8F3', '#49E8F3', '#649AC5', false),
    new character('ryunaru', 'Ryunaru', 'RyuNaruVT', '', 'RyuNaruVT', 'ryunaruFont', 'G', '#C75B32', '#79A8B2', '#79A8B2', false),
    new character('hugo', 'Hugo', 'hugodemaire', '', 'hugodemaire', 'hugoFont', 'G', '#BEE2F5', '#BEE2F5', '#7E85A4', false),
    new character('lunar', 'Lunar', 'lunar_reiji', '', 'Lunar_Reiji', 'lunarFont', 'G', '#7D8FB0', '#7D8FB0', '#4E474E', false),
    new character('crystal', 'Crystal', 'CrystalPudding', '', 'CrystalPudding', 'crystalFont', 'G', '#FDB3B6', '#FDB3B6', '#B78364', false),
    new character('plant', 'Plant', 'plantkuroba', '', 'plantkuroba', 'plantFont', 'G', '#b3b01d', '#CDDA2F', '#757769', false),
    new character('bubu', 'Bubu', 'bubucore69', '', 'bubucore69', 'bubuFont', 'M', '#91A45D', '#91A45D', '#C24445', false)

  ];

}
