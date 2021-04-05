import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SmartGarden';
  constructor(private router: Router) {}
  ngOnInit(){

  }
  navegateToQR(){
    this.router.navigate(['/qrcode']);
  }
  navegateToGarden(){
    this.router.navigate(['/garden']);
  }
  navegateToHistory(){
    this.router.navigate(['/history']);
  }
}
