import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'crud', component: UsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
