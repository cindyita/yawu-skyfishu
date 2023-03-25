import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatusComponent } from './components/nav/status.component';
import { MenuPrimaryComponent } from './components/nav/menu-primary.component';
import { MenuFooterComponent } from './components/nav/menu-footer.component';
import { SliderPrimaryComponent } from './components/slider-primary/slider-primary.component';
import { AboutmeComponent } from './views/aboutme/aboutme.component';
import { CommissionsComponent } from './views/commissions/commissions.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { TosComponent } from './views/tos/tos.component';
import { PrivacypolicyComponent } from './views/require/privacypolicy/privacypolicy.component';
import { WebconditionsComponent } from './views/require/webconditions/webconditions.component';
import { ContactComponent } from './views/require/contact/contact.component';
import { CreditsComponent } from './components/nav/credits.component';
import { Error404Component } from './views/error404/error404.component';
import { SocialmediaComponent } from './components/nav/socialmedia.component';
import { FilterPrincipalPipe } from './pipes/filter-principal.pipe';
import { FilterCharacterPortfolioPipe } from './pipes/filter-character-portfolio.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    StatusComponent,
    MenuPrimaryComponent,
    MenuFooterComponent,
    SliderPrimaryComponent,
    AboutmeComponent,
    CommissionsComponent,
    PortfolioComponent,
    TosComponent,
    PrivacypolicyComponent,
    WebconditionsComponent,
    ContactComponent,
    CreditsComponent,
    Error404Component,
    SocialmediaComponent,
    FilterPrincipalPipe,
    FilterCharacterPortfolioPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
