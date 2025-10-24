import { Component } from '@angular/core';
import { Searchbar } from "../searchbar/searchbar";
import { Tiendas } from "../tiendas/tiendas";
import { Header } from "../header/header";

@Component({
  selector: 'app-landing-page',
  imports: [Searchbar, Tiendas, Header],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

}
