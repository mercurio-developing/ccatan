//angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//material
import {MatDatepickerModule,MatNativeDateModule} from '@angular/material';
//ngx bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';
//google maps
import { AgmCoreModule } from '@agm/core';
//app components//
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { ToursComponent } from './components/tours/tours.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { ReviewCarouselComponent } from './components/home/review-carousel/review-carousel.component';
import { ReserveRoomComponent } from './components/rooms/reserve-room/reserve-room.component';
import { EmailValidatorDirective } from './shared/email-validator.directive';
import { ReservesuccessComponent } from './components/reservesuccess/reservesuccess.component';
import { EmailsuccessComponent } from './components/emailsuccess/emailsuccess.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

//Router
const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'rooms',component:RoomsComponent},
  {path:'tours',component:ToursComponent},
  {path:'contact',component:ContactComponent},
  {path:'reserve',component:ReserveComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeCarouselComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    GoogleMapComponent,
    ToursComponent,
    RoomsComponent,
    ReserveComponent,
    ReviewCarouselComponent,
    EmailValidatorDirective,
    ReservesuccessComponent,
    EmailsuccessComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(appRoutes,{useHash:true}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDv-5yhc2a1xORKcsYRCq1XrXVwUUo6igQ'
    }),
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
