import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbienfaitComponent } from './components/component/addbienfait/addbienfait.component';
import { AddetablissementComponent } from './components/component/addetablissement/addetablissement.component';
import { AddsecteurComponent } from './components/component/addsecteur/addsecteur.component';
import { AdduserComponent } from './components/component/adduser/adduser.component';
import { AddvilleComponent } from './components/component/addville/addville.component';
import { CustomizerComponent } from './components/component/customizer/customizer.component';
import { DashboardComponent } from './components/component/dashboard/dashboard.component';
import { EditbienfaitComponent } from './components/component/editbienfait/editbienfait.component';
import { EditetablissementComponent } from './components/component/editetablissement/editetablissement.component';
import { EditsecteurComponent } from './components/component/editsecteur/editsecteur.component';
import { EdituserComponent } from './components/component/edituser/edituser.component';
import { EditvilleComponent } from './components/component/editville/editville.component';
import { ProfileComponent } from './components/component/profile/profile.component';
import { ReclamationComponent } from './components/component/reclamation/reclamation.component';
import { ReservationComponent } from './components/component/reservation/reservation.component';
import { SidebarComponent } from './components/component/sidebar/sidebar.component';
import { ViewbienfaitComponent } from './components/component/viewbienfait/viewbienfait.component';
import { ViewetablissementComponent } from './components/component/viewetablissement/viewetablissement.component';
import { ViewsecteurComponent } from './components/component/viewsecteur/viewsecteur.component';
import { ViewuserComponent } from './components/component/viewuser/viewuser.component';
import { ViewvilleComponent } from './components/component/viewville/viewville.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'sidebar',component:SidebarComponent},
  {path:'',component:DashboardComponent},
  {path:'customizer',component:CustomizerComponent},
  {path:'profile',component:ProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'reclamation',component:ReclamationComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'viewuser',component:ViewuserComponent},
  {path:'edituser/:id',component:EdituserComponent},
  {path:'addville',component:AddvilleComponent},
  {path:'viewville',component:ViewvilleComponent},
  {path:'editville/:id',component:EditvilleComponent},
  {path:'addsecteur',component:AddsecteurComponent},
  {path:'viewsecteur',component:ViewsecteurComponent},
  {path:'editsecteur/:id',component:EditsecteurComponent},
  {path:'addetablissement',component:AddetablissementComponent},
  {path:'viewetablissement',component:ViewetablissementComponent},
  {path:'editetablissement/:id',component:EditetablissementComponent},
  {path:'addservice',component:AddbienfaitComponent},
  {path:'viewservice',component:ViewbienfaitComponent},
  {path:'editservice/:id',component:EditbienfaitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
