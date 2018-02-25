import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//CONTENIDO WEB
import { WebContenidoComponent } from './web-contenido/web-contenido.component';
import { WebFooterComponent } from './web-footer/web-footer.component';
import { WebHeaderComponent } from './web-header/';
import { WebMenuLateralComponent } from './web-menu-lateral/web-menu-lateral.component';

//PRIMENG
import {
  ListboxModule,
  DataListModule,
  InputTextModule,
  CarouselModule,
  DataTableModule,
  PaginatorModule,
  InputTextareaModule,
  PanelModule,
  DropdownModule,
  ButtonModule,
  DialogModule,
  ConfirmationService,
  ConfirmDialogModule,
  SharedModule,
  EditorModule,
  FileUploadModule,
  MenuItem,
  MenuModule,
  AutoCompleteModule,
  GrowlModule,
  CheckboxModule,
  RadioButtonModule,
  Message,
  SplitButtonModule
} from 'primeng/primeng';

//Servicios
import { AuthGuardService } from './auth/auth-guard.service';
import { UsuarioService } from './shared/services/index'
import { FacturaService } from './shared/services/factura.service';
import { SocioService } from './shared/services/socio.service';
import { LoteService } from './shared/services/lote.service';

//COMPONENTS
import { SDKBrowserModule } from './shared/services/lbsdk/';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GestionFacturaComponent } from './gestion-factura/gestion-factura.component';
import { TablaSociosComponent } from './tabla-socios/tabla-socios.component';
import { TablaLotesComponent } from './tabla-lotes/tabla-lotes.component';
import { GestionLoteComponent } from './gestion-lote/gestion-lote.component';
import { GestionSocioComponent } from './gestion-socio/gestion-socio.component';
import { TablaFacturaComponent } from './tabla-factura/tabla-factura.component';

@NgModule({
  declarations: [
    AppComponent,
    WebContenidoComponent,
    WebFooterComponent,
    WebHeaderComponent,
    WebMenuLateralComponent,
    InicioComponent,
    LoginComponent,
    RegisterComponent,
    GestionFacturaComponent,
    TablaLotesComponent,
    TablaSociosComponent,
    GestionLoteComponent,
    GestionSocioComponent,
    TablaFacturaComponent,

  ],
  imports: [
    ListboxModule,
    DataListModule,
    BrowserModule,
    FormsModule,
    PaginatorModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataTableModule,
    CarouselModule,
    InputTextModule,
    EditorModule,
    InputTextareaModule,
    PanelModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    FileUploadModule,
    AutoCompleteModule,
    GrowlModule,
    CheckboxModule,
    RadioButtonModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    MenuModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [
    AuthGuardService,
    ConfirmationService,
    UsuarioService,
    FacturaService,
    SocioService,
    LoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
