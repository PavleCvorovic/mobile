import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TelefoniComponent } from './telefoni/telefoni.component';
import { ModeliComponent } from './modeli/modeli.component';
import { PostaviOglasComponent } from './postavi-oglas/postavi-oglas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';
import { TelefonDetaljiComponent } from './telefon-detalji/telefon-detalji.component';
import { AdminBordComponent } from './admin-bord/admin-bord.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {CookieService} from "ngx-cookie-service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TelefoniComponent,
    ModeliComponent,
    PostaviOglasComponent,
    TelefonDetaljiComponent,
    AdminBordComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
