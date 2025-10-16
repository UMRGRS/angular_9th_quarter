import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tiendas } from "./tiendas/tiendas";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tiendas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '9th_quarter_app';

}
