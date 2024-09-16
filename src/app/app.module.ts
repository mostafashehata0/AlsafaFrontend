import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './component/news/news.component';
import { CustomersComponent } from './component/customers/customers.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ServicesComponent } from './component/ourServices/services.component';
import { ContactComponent } from './component/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TelecommunicationComponent } from './component/telecommunication/telecommunication.component';
import { ConstructionComponent } from './component/construction/construction.component';
import { ElectrictyComponent } from './component/electricty/electricty.component';
import { DirecianaDrillingComponent } from './component/direciana-drilling/direciana-drilling.component';
import { LnfrastrctureComponent } from './component/lnfrastrcture/lnfrastrcture.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CarsualComponent } from './component/carsual/carsual.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule as PrimngCarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule as PrimngBrowserAnimationsModule } from '@angular/platform-browser/animations';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    CustomersComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    TelecommunicationComponent,
    ConstructionComponent,
    ElectrictyComponent,
    DirecianaDrillingComponent,
    LnfrastrctureComponent,
    CarsualComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ButtonModule,
    PrimngCarouselModule,
    PrimngBrowserAnimationsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
