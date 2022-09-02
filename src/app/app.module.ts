import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Object } from 'core-js'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './components/component/component.component';
import { FileUploadModule } from 'ng2-file-upload';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './components/component/sidebar/sidebar.component';
import { AdduserComponent } from './components/component/adduser/adduser.component';
import { ViewuserComponent } from './components/component/viewuser/viewuser.component';
import { EdituserComponent } from './components/component/edituser/edituser.component';
import { AddvilleComponent } from './components/component/addville/addville.component';
import { ViewvilleComponent } from './components/component/viewville/viewville.component';
import { EditvilleComponent } from './components/component/editville/editville.component';
import { AddsecteurComponent } from './components/component/addsecteur/addsecteur.component';
import { ViewsecteurComponent } from './components/component/viewsecteur/viewsecteur.component';
import { EditsecteurComponent } from './components/component/editsecteur/editsecteur.component';
import { AddetablissementComponent } from './components/component/addetablissement/addetablissement.component';
import { ViewetablissementComponent } from './components/component/viewetablissement/viewetablissement.component';
import { EditetablissementComponent } from './components/component/editetablissement/editetablissement.component';
import { AddbienfaitComponent } from './components/component/addbienfait/addbienfait.component';
import { ViewbienfaitComponent } from './components/component/viewbienfait/viewbienfait.component';
import { EditbienfaitComponent } from './components/component/editbienfait/editbienfait.component';
import { DashboardComponent } from './components/component/dashboard/dashboard.component';
import { CustomizerComponent } from './components/component/customizer/customizer.component';
import { ProfileComponent } from './components/component/profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ReclamationComponent } from './components/component/reclamation/reclamation.component';
import { ReservationComponent } from './components/component/reservation/reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
  
    LoginComponent,
       SidebarComponent,
       AdduserComponent,
       ViewuserComponent,
       EdituserComponent,
       AddvilleComponent,
       ViewvilleComponent,
       EditvilleComponent,
       AddsecteurComponent,
       ViewsecteurComponent,
       EditsecteurComponent,
       AddetablissementComponent,
       ViewetablissementComponent,
       EditetablissementComponent,
       AddbienfaitComponent,
       ViewbienfaitComponent,
       EditbienfaitComponent,
       DashboardComponent,
       CustomizerComponent,
       ProfileComponent,
       RegisterComponent,
       ReclamationComponent,
       ReservationComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
