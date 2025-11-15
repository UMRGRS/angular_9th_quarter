import { Injectable, signal } from '@angular/core';
import { UserData } from '../interfaces/user-data';
import { ActiveEquipment } from '../interfaces/active-equipment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedData {
  constructor(private router:Router){}
  
  private dataSignal = signal<{user:UserData, equipment:ActiveEquipment}| null>(null);

  setData(data: {user:UserData, equipment:ActiveEquipment}) {
    this.dataSignal.set(data);
  }

  cleanData(){
    this.dataSignal.set(null);
  }

  getData() {
    return this.dataSignal();
  }

  canActivate():boolean{
    if(this.getData()){
      return true;
    }
    else {
      this.router.navigate(['']);
      return false;
    }
  }
}
