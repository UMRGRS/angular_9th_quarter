import { Injectable } from '@angular/core';
import { UserData } from '../../interfaces/user-data';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { UserMapper } from '../mappers/user-mapper';

@Injectable({
  providedIn: 'root'
})
export class UserRepository {

  constructor(private firestore: Firestore) {}

  public async getUser(username: string):Promise<UserData | null>{
    const q = query(
      collection(this.firestore, 'users'), 
      where("username", "==", username), 
      limit(1)
    );
    const query_snapshot = await getDocs(q);
    
    return query_snapshot.empty ? null : UserMapper.fromFirestore(query_snapshot.docs[0]);
  }
}
