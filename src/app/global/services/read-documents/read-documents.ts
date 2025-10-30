import { Injectable } from '@angular/core';
import { UserData } from '../../interfaces/user-data';
import { EquipmentData } from '../../interfaces/equipment-data';
import { EnemiesData } from '../../interfaces/enemies-data';
import { DocumentData, DocumentSnapshot } from '@angular/fire/firestore';
import { EquipmentType } from '../../enums/equipment-type';

@Injectable({
  providedIn: 'root'
})
export class ReadDocuments {

  public async getUser(uid: string):Promise<UserData | null>{
    var document = await this.readUserFromFirestore(uid);
    return document ? this.createUserFromFirestore(document) :null;
  }

  public async getEquipment(uid:string):Promise<EquipmentData|null>{
    var document = await this.readEquipmentFromFireStore(uid);
    return document ? this.createEquipmentFromFirestore(document) :null;
  }

  public async getEquipmentsList(type:EquipmentType):Promise<Array<EquipmentData>|null>{
    var documents = await this.readEquipmentsListFromFirestore(type);
    return documents ? documents.map(this.createEquipmentFromFirestore):null;
  }

  public async getEnemiesList():Promise<Array<EnemiesData>|null>{
    var documents = await this.readEnemiesListFromFirestore();
    return documents ? documents.map(this.createEnemiesFromFirestore):null;
  }

  private createUserFromFirestore(document: DocumentSnapshot<DocumentData>):UserData {
    return {
      uid: document.id,
      ...document.data()
    } as UserData;
  }

  private createEquipmentFromFirestore(document: DocumentSnapshot<DocumentData>):EquipmentData {
    return {
      uid: document.id,
      ...document.data()
    } as EquipmentData;
  }

  private createEnemiesFromFirestore(document: DocumentSnapshot<DocumentData>):EnemiesData {
    return {
      uid: document.id,
      ...document.data()
    } as EnemiesData;
  }

  private async readUserFromFirestore(uid: string):Promise<DocumentSnapshot<DocumentData> | null>{
     // TODO: implement Firestore query here
     throw new Error('Method not implemented.');
  }

  private async readEquipmentFromFireStore(uid: string):Promise<DocumentSnapshot<DocumentData> | null>{
     // TODO: implement Firestore query here
     throw new Error('Method not implemented.');
  }

  private async readEquipmentsListFromFirestore(type:EquipmentType):Promise<Array<DocumentSnapshot<DocumentData>> | null>{
    // TODO: implement Firestore query here
     throw new Error('Method not implemented.');
  }

  private async readEnemiesListFromFirestore():Promise<Array<DocumentSnapshot<DocumentData>> | null>{
    // TODO: implement Firestore query here
     throw new Error('Method not implemented.');
  }
}
