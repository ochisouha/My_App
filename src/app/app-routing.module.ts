import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { registerComponent } from './register/register.component';
import { ProviderComponent } from './provider/provider.component';
import { MapcontainerComponent } from './mapcontainer/mapcontainer.component';

const routes: Routes = [
  
  {path:'',component:LoginComponent},
  {path:'map',component:MapcontainerComponent},
  {path:'register',component:registerComponent},
  {path:'login',component:LoginComponent},
  {path:'provider',component:ProviderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
