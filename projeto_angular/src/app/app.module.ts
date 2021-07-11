import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoModule } from './components/navegacao/navegacao.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataServiceMenu } from './shared/services/data.service.menu';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule,
    BrowserAnimationsModule
  ],
  providers: [DataServiceMenu],
  bootstrap: [AppComponent],
})
export class AppModule { }
