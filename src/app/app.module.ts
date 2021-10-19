import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoModule } from './components/navegacao/navegacao.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataServiceMenu } from './shared/services/data.service.menu';
import { GridService } from './shared/services/grid.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { UploadArquivoService } from './shared/services/upload.service';
import { HttpClientModule } from '@angular/common/http';
 

@NgModule({
  declarations: [
    AppComponent, 
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    NavegacaoModule,
    BrowserAnimationsModule,   
    HttpClientModule       
  ],
  providers: [
    DataServiceMenu,
    GridService,
    UploadArquivoService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { } 
