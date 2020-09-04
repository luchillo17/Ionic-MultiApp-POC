import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private menu: MenuController) {}

  ngOnInit(): void {
    this.openFirst();
  }

  openFirst(): void {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd(): void {
    this.menu.open('end');
  }

  openCustom(): void {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
