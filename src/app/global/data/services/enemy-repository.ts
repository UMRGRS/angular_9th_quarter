import { Injectable } from '@angular/core';
import { EnemiesData } from '../../interfaces/enemies-data';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { EnemiesMapper } from '../mappers/enmies-mapper';

@Injectable({
  providedIn: 'root'
})
export class EnemyRepository {
  constructor(private firestore: Firestore) {}

  public async getEnemiesList():Promise<Array<EnemiesData>|null>{
    const q = query(
      collection(this.firestore, 'enemies'), 
      orderBy("rank")
    );
    const query_snapshot = await getDocs(q);

    return query_snapshot.empty ? null : query_snapshot.docs.map(EnemiesMapper.fromFirestore);
  }
}
