import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-page',
  imports: [],
  templateUrl: './add-page.html',
  styleUrl: './add-page.css'
})
export class AddPage {
  constructor(private firestore: Firestore) {}

  async addDocuments() {
    const usersCollection = collection(this.firestore, 'users');
    const docs: any[] = []

    for(var doc of docs){
      await addDoc(usersCollection, doc);
    }    
    console.log('Documents added');
  }
  
}
