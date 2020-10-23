import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ValidateEqualModule } from 'ng-validate-equal';

import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { EditarPassComponent } from './components/editar-pass/editar-pass.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AuthService } from './services/auth.service';
import { RegistroService } from './services/registro.service'
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { AddRegistroComponent } from './components/add-registro/add-registro.component';
import { RegistrosWeeklyComponent } from './components/registros-weekly/registros-weekly.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    RegistroComponent,
    HomeComponent,
    ProfileComponent,
    EditarEmpleadoComponent,
    EditarPassComponent,
    PageNotFoundComponent,
    AddRegistroComponent,
    RegistrosWeeklyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ValidateEqualModule
  ],
  providers: [
    AuthService,
    RegistroService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
