import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/plants/navbar/navbar.component';
import { PlantComponent } from './components/plants/plant/plant.component';
import { AddComponent } from './components/plants/add/add.component';
import { ContentComponent } from './components/error404/content/content.component';
import { MainComponent } from './components/error404/main/main.component';
import { HeaderComponent } from './components/error404/header/header.component';
import { WebcamModule } from 'ngx-webcam';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { GraphComponent } from './components/details/graph/graph.component';
import { ActivityComponent } from './components/details/activity/activity.component';
import { ReadingComponent } from './components/details/reading/reading.component';
import { HeadComponent } from './components/details/head/head.component';
import { GraphicsComponent } from './components/details/graphics/graphics.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlantComponent,
    AddComponent,
    ContentComponent,
    MainComponent,
    HeaderComponent,
    GraphComponent,
    ActivityComponent,
    ReadingComponent,
    HeadComponent,
    GraphicsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    WebcamModule,
    ZXingScannerModule,
    NgQrScannerModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
