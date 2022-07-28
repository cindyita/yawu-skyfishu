export class character {

    constructor(img: string, name: string, twitchLink: string, youtubeLink: string, twitterLink: string, font: string, fontSize: string, colorPrimary:string, colorSecondary:string, colorTertiary:string,principal:boolean){

        this.img = img;
        this.name = name;
        this.twitchLink = twitchLink;
        this.youtubeLink = youtubeLink;
        this.twitterLink = twitterLink;
        this.font = font;
        this.fontSize = fontSize;
        this.colorPrimary = colorPrimary;
        this.colorSecondary = colorSecondary;
        this.colorTertiary = colorTertiary;
        this.principal = principal;

    }

    img:string = '';
    name: string = '';
    twitchLink: string = '';
    youtubeLink: string = '';
    twitterLink: string = '';
    font: string = '';
    fontSize: string = '';
    colorPrimary: string = '';
    colorSecondary: string = '';
    colorTertiary: string = '';
    principal:boolean = false;

}