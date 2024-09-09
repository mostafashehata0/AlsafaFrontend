import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ServicesComponent } from './component/ourServices/services.component';
import { NewsComponent } from './component/news/news.component';

import { TelecommunicationComponent } from './component/telecommunication/telecommunication.component';
import { ConstructionComponent } from './component/construction/construction.component';
import { DirecianaDrillingComponent } from './component/direciana-drilling/direciana-drilling.component';
import { ElectrictyComponent } from './component/electricty/electricty.component';
import { LnfrastrctureComponent } from './component/lnfrastrcture/lnfrastrcture.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'tele', component: TelecommunicationComponent },
  { path: 'construction', component: ConstructionComponent },
  { path: 'direciana', component: DirecianaDrillingComponent },
  { path: 'electricty', component: ElectrictyComponent },
  { path: 'lnfrastrucre', component: LnfrastrctureComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
