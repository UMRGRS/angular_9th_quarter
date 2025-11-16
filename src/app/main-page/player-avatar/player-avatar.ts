import { Component, Input } from '@angular/core';
import { UserData } from '../../global/interfaces/user-data';

@Component({
  selector: 'app-player-avatar',
  imports: [],
  templateUrl: './player-avatar.html',
  styleUrl: './player-avatar.css'
})
export class PlayerAvatar {
  @Input({required:true})
  user_data!:UserData;
}
