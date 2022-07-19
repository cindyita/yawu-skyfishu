import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './views/aboutme/aboutme.component';
import { CommissionsComponent } from './views/commissions/commissions.component';
import { Error404Component } from './views/error404/error404.component';
import { HomeComponent } from './views/home/home.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ContactComponent } from './views/require/contact/contact.component';
import { PrivacypolicyComponent } from './views/require/privacypolicy/privacypolicy.component';
import { WebconditionsComponent } from './views/require/webconditions/webconditions.component';
import { TosComponent } from './views/tos/tos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'commissions', component: CommissionsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'tos', component: TosComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent },
  { path: 'webconditions', component: WebconditionsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '404', component: Error404Component },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
