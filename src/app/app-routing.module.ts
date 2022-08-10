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
  { path: 'home', component: HomeComponent, runGuardsAndResolvers: 'always' },
  { path: 'aboutme', component: AboutmeComponent, runGuardsAndResolvers: 'always' },
  { path: 'commissions', component: CommissionsComponent, runGuardsAndResolvers: 'always' },
  { path: 'portfolio', component: PortfolioComponent, runGuardsAndResolvers: 'always' },
  { path: 'tos', component: TosComponent, runGuardsAndResolvers: 'always' },
  { path: 'privacypolicy', component: PrivacypolicyComponent, runGuardsAndResolvers: 'always' },
  { path: 'webconditions', component: WebconditionsComponent, runGuardsAndResolvers: 'always' },
  { path: 'contact', component: ContactComponent, runGuardsAndResolvers: 'always' },
  { path: '404', component: Error404Component, runGuardsAndResolvers: 'always' },
  { path: '', pathMatch: 'full', redirectTo: 'home', runGuardsAndResolvers: 'always' },
  { path: '**', redirectTo: '404', runGuardsAndResolvers: 'always' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
