import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-progress-bar',
  imports: [],
  templateUrl: './stats-progress-bar.html',
  styleUrl: './stats-progress-bar.css'
})
export class StatsProgressBar implements OnInit{
  ngOnInit(): void {
    this.progress = this.current_value*100/this.max_value;
  }
  @Input({ required: true })
  name: string = "";

  @Input({ required: true })
  max_value: number = 0;

  @Input({ required: true })
  current_value: number = 0;

  progress : number = 0;
}
