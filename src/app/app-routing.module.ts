import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Interface/General/landing/landing.component';
import { LoginRentComponent } from './Interface/Components/login-rent/login-rent.component';
import { RegisterRetComponent } from './Interface/Components/register-ret/register-ret.component';
import { InquilinoDashComponent } from './Interface/Components/inquilino-dash/inquilino-dash.component';
import { InquilinoGuard } from './Servicios/tipo-usuario/inquilino.guard';
import { ArrendadorDashComponent } from './Interface/Components/arrendador-dash/arrendador-dash.component';
import { ArrendadorGuard } from './Servicios/tipo-usuario/arrendador.guard';
import { CreateComunityComponent } from './Interface/Components/create-comunity/createcomunity.component';
import { SidebarComponent } from './Interface/Components/sidebar/sidebar.component';
import { ListComunityComponent } from './Interface/Components/list-comunity/list-comunity.component';
import { JoinComunityComponent } from './Interface/Components/join-comunity/join-comunity.component';
import { SidebarInqComponent } from './Interface/Components/sidebar-inq/sidebar-inq.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: LandingComponent },
  { path: 'log-rent', component: LoginRentComponent},
  { path: 'register-ret', component: RegisterRetComponent},
  { path: 'create-comuni', component: CreateComunityComponent},
  {
    path: 'inquilino-dash', component: InquilinoDashComponent, canActivate: [InquilinoGuard],
    children: [
      { path: 'create-comuni', component: CreateComunityComponent},
      { path: 'menu-dash-inq', component: SidebarInqComponent},
      { path: 'list-comuni', component: ListComunityComponent},
      { path: 'join-comuni', component: JoinComunityComponent}

    ]
  },
  {
    path: 'arrendador-dash', component: ArrendadorDashComponent, canActivate: [ArrendadorGuard],
    children: [
      { path: 'create-comuni', component: CreateComunityComponent},
      { path: 'menu-dash', component: SidebarComponent},
      { path: 'list-comuni', component: ListComunityComponent},
      { path: 'join-comuni', component: JoinComunityComponent}


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
