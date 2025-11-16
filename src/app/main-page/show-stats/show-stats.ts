import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-progress-bar',
  imports: [],
  templateUrl: './show-stats.html',
  styleUrl: './show-stats.css'
})
export class ShowStats {
  @Input({ required: true })
  name: string = "";

  @Input({ required: true })
  value: number = 0;
}
