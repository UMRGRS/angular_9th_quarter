import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tiendas',
  imports: [],
  templateUrl: './tiendas.html',
  styleUrl: './tiendas.css'
})

export class Tiendas {
  @Input() public store: string = "";
  @Input() public store_logo: string = "";
  @Input() public store_link: string = "";

}
