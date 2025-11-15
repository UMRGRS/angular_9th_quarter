import { Component } from '@angular/core';
import { Modal } from '../modal/modal';
import { MatDialog } from '@angular/material/dialog';
import { UserRepository } from '../../global/data/services/user-repository';
import { EquipmentRepository } from '../../global/data/services/equipment-repository';
import { SharedData } from '../../global/services/shared-data';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  imports: [ReactiveFormsModule],
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.css'
})
export class Searchbar {
  constructor(private dialog: MatDialog, private user_repo:UserRepository, private equipment_repo:EquipmentRepository, private shared_data:SharedData, private router:Router){}

  show_loading_icon:boolean = false;

  search_user = new FormGroup({
    username: new FormControl('', [Validators.required]),
  });


  async searchUser():Promise<void> {
    if(!this.search_user.valid){
      this.openDialog('Please type a valid name');
      return;
    }

    this.show_loading_icon = true;

    const user = await this.user_repo.getUser(this.search_user.value.username!);

    if(!user){
      this.openDialog('There is no player with that name :c');
      return;
    }

    const equipment = await this.equipment_repo.getUserEquipment([user?.weapon, user?.armor, user?.accessory_one, user?.accessory_two]);
    
    this.shared_data.setData({ user: user, equipment: equipment! });
    this.router.navigate(['/player']);
  }

  openDialog(message:string):void {
    const dialogRef = this.dialog.open(Modal, {
      data: {message: message},
      panelClass: 'no-card-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.show_loading_icon = false;
    });
  }
}
