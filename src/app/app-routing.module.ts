import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

//Components
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistrosWeeklyComponent } from './components/registros-weekly/registros-weekly.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { EditarPassComponent } from './components/editar-pass/editar-pass.component';
import { AddRegistroComponent } from './components/add-registro/add-registro.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update/:id',
    component: EditarEmpleadoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'setpassword/:id',
    component: EditarPassComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registro/:id',
    component: RegistroComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registroweek/:id',
    component: RegistrosWeeklyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addregistro/:id',
    component: AddRegistroComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
