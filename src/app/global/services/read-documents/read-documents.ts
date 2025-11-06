import { Injectable } from '@angular/core';
import { UserData } from '../../interfaces/user-data';
import { EquipmentData } from '../../interfaces/equipment-data';
import { EnemiesData } from '../../interfaces/enemies-data';
import {Firestore} from '@angular/fire/firestore';
import { collection, doc, DocumentData, DocumentSnapshot, getDoc, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { EquipmentType } from '../../enums/equipment-type';

@Injectable({
  providedIn: 'root'
})
export class ReadDocuments {

  constructor(private firestore: Firestore) {}

  public async getUser(username: string):Promise<UserData | null>{
    var document = await this.readUserFromFirestore(username);
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

  private async readUserFromFirestore(username: string):Promise<DocumentSnapshot<DocumentData> | null>{
    const q = query(
      collection(this.firestore, 'users'), 
      where("username", "==", username), 
      limit(1)
    );
    const query_snapshot = await getDocs(q);
    
    if(!query_snapshot.empty){
      return query_snapshot.docs[0];
    }

    return null;
  }

  private async readEquipmentFromFireStore(uid: string):Promise<DocumentSnapshot<DocumentData> | null>{
    const equipment_ref = doc(this.firestore, 'equipment', uid);

    const equipment_snapshot = await getDoc(equipment_ref);

    if(equipment_snapshot.exists()){
      return equipment_snapshot;
    }

    return null;
  }

  private async readEquipmentsListFromFirestore(type:EquipmentType):Promise<Array<DocumentSnapshot<DocumentData>> | null>{
    const q = query(
      collection(this.firestore, 'equipment'), 
      where("type", "==", type.toString()),
      orderBy("name")
    );

    const query_snapshot = await getDocs(q);
    
    if(!query_snapshot.empty){
      return query_snapshot.docs;
    }

    return null;
  }

  private async readEnemiesListFromFirestore():Promise<Array<DocumentSnapshot<DocumentData>> | null>{
    const q = query(
      collection(this.firestore, 'enemies'), 
      orderBy("rank")
    );

    const query_snapshot = await getDocs(q);
    
    if(!query_snapshot.empty){
      return query_snapshot.docs;
    }

    return null;
  }
}
