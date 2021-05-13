import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelefoniComponent } from './telefoni/telefoni.component';
import {ModeliComponent} from './modeli/modeli.component';
import {PostaviOglasComponent} from './postavi-oglas/postavi-oglas.component';
import { TelefonDetaljiComponent } from './telefon-detalji/telefon-detalji.component';
import {AdminBordComponent} from './admin-bord/admin-bord.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { DetaljiComponent } from './admin-bord/detalji/detalji.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: '', redirectTo: 'telefon' , pathMatch: 'full' },
  {path: 'telefon', component : TelefoniComponent},
  {path: 'model', component : ModeliComponent},
  {path: 'postavi_oglas', component : PostaviOglasComponent},
  {path: 'telefon-detalji/:id', component:TelefonDetaljiComponent},
  {path: 'telefon-detalji-admin/:id', component:DetaljiComponent, canActivate:[AdminGuardGuard]},
  {path: 'admin', component:AdminBordComponent, canActivate:[AdminGuardGuard]},
  {path:  'admin-login', component:AdminLoginComponent},
  {path:'test', component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
