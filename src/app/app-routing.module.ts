import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelefoniComponent } from './telefoni/telefoni.component';

const routes: Routes = [
  {path: '', redirectTo: 'telefon' , pathMatch: 'full' },
  {path: 'telefon', component : TelefoniComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
