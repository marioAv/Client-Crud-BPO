import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { RouterModule, Routes } from '@angular/router';
import { RequestsService } from './requests.service'
import {ClientsDataService} from './clients-data.service';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { AddClientFormComponent } from './add-client-form/add-client-form.component';
import { AddCompanyFormComponent } from './add-company-form/add-company-form.component'


const appRoutes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'clients/edit/client/:id',
    component:ClientComponent
  },
  {
    path:'clients/add/client',
    component: ClientComponent
  },
  {
    path:'clients/add/company',
    component: ClientComponent
  },
  {
    path:'clients',
    component:ClientComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent,
    ClientsTableComponent,
    AddClientFormComponent,
    AddCompanyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ClientsDataService,RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
