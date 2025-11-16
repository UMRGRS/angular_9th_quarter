import { Injectable, NgZone } from '@angular/core';
import { UserData } from '../../interfaces/user-data';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { UserMapper } from '../mappers/user-mapper';

@Injectable({
  providedIn: 'root'
})
export class UserRepository {

  constructor(private firestore: Firestore, private ngZone:NgZone) {}

  public async getUser(username: string): Promise<UserData | null> {
    const q = query(
      collection(this.firestore, 'users'),
      where("username", "==", username),
      limit(1)
    );

    const querySnapshot = await this.ngZone.runOutsideAngular(() => getDocs(q));

    return querySnapshot.empty ? null : UserMapper.fromFirestore(querySnapshot.docs[0]);
  }
}
