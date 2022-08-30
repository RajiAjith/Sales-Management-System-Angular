import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesComponent } from './sales/sales.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';


import { AuthGuard } from './shared/auth.guard';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { AddemployeeComponent } from './sales/addemployee/addemployee.component';
import { EditemployeeComponent } from './sales/editemployee/editemployee.component';
import { ListemployeeComponent } from './sales/listemployee/listemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    HeaderComponent,
    LoginComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    ListemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    NgxPaginationModule,
    //Ng2FilterPipeModule
    Ng2SearchPipeModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    })
  ],

  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
