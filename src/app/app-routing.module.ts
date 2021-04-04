import { HistorialCrecimientoComponent } from './SmartGarden/historial-crecimiento/historial-crecimiento.component';
import { JardinesComponent } from './SmartGarden/jardines/jardines.component';
import { QrCodeComponent } from './SmartGarden/qr-code/qr-code.component';
import { NavbarComponent } from './SmartGarden/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  /*{path: '', component: },*/
  {path: 'qrcode', component: QrCodeComponent},
  {path: 'garden',component:JardinesComponent},
  {path: 'history',component: HistorialCrecimientoComponent},
  /*{path: '**', component:}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
