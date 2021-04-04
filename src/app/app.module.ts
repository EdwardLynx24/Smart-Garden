import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QrCodeComponent } from './SmartGarden/qr-code/qr-code.component';
import { NavbarComponent } from './SmartGarden/navbar/navbar.component';
import { FooterComponent } from './SmartGarden/footer/footer.component';
import { HistorialCrecimientoComponent } from './SmartGarden/historial-crecimiento/historial-crecimiento.component';
import { JardinesComponent } from './SmartGarden/jardines/jardines.component';

@NgModule({
  declarations: [
    AppComponent,
    QrCodeComponent,
    NavbarComponent,
    FooterComponent,
    HistorialCrecimientoComponent,
    JardinesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
