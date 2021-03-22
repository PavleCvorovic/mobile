import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelefoniComponent } from './telefoni/telefoni.component';
import {ModeliComponent} from './modeli/modeli.component';
import {PostaviOglasComponent} from './postavi-oglas/postavi-oglas.component';

const routes: Routes = [
  {path: '', redirectTo: 'telefon' , pathMatch: 'full' },
  {path: 'telefon', component : TelefoniComponent},
  {path: 'model', component : ModeliComponent},
  {path: 'postavi_oglas', component : PostaviOglasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
