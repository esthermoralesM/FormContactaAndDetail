import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContactComponent } from './pages/form-contact/form-contact.component';
import { VistaComponent } from './pages/vista/vista.component';

const routes: Routes = [
  {path: '', redirectTo: 'form-contact', pathMatch: 'full'},
  {path: "form-contact", component: FormContactComponent},
  {path: "vista", component: VistaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
