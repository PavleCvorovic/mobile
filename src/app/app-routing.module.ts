import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelefoniComponent } from './telefoni/telefoni.component';
import {ModeliComponent} from './modeli/modeli.component';
import {PostaviOglasComponent} from './postavi-oglas/postavi-oglas.component';
import { TelefonDetaljiComponent } from './telefon-detalji/telefon-detalji.component';
import {AdminBordComponent} from './admin-bord/admin-bord.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {path: '', redirectTo: 'telefon' , pathMatch: 'full' },
  {path: 'telefon', component : TelefoniComponent},
  {path: 'model', component : ModeliComponent},
  {path: 'postavi_oglas', component : PostaviOglasComponent},
  {path: 'telefon-detalji/:id', component:TelefonDetaljiComponent},
  {path: 'admin', component:AdminBordComponent},
  {path:  'admin-login', component:AdminLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
