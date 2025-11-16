
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tiendas',
  imports: [],
  templateUrl: './tiendas.html',
  styleUrl: './tiendas.css'
})

export class Tiendas {
  @Input({required:true}) public store: string = "";
  @Input({required:true}) public store_logo: string = "";
  @Input({required:true}) public store_link: string = "";

}
