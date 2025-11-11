import { Component } from '@angular/core';
import { Searchbar } from './searchbar/searchbar';
import { Tiendas } from './tiendas/tiendas';



@Component({
  selector: 'app-landing-page',
  imports: [Searchbar, Tiendas],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

}
