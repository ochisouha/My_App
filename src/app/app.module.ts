import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { registerComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { ProviderComponent } from './provider/provider.component';
import { ProviderformComponent } from './providerform/providerform.component';
import { MapcontainerComponent } from './mapcontainer/mapcontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    registerComponent,
    HomeComponent,
    MapComponent,
    ProviderComponent,
    ProviderformComponent,
    MapcontainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
