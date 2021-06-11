import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CepService } from './api/service/cep.service';
import { JsonService } from './api/service/json-server.service';
import { SearchCepComponent } from './components/search-cep/search-cep.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdressDetailComponent } from './components/adress-detail/adress-detail.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SearchCepComponent,
    AdressDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [CepService, JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
