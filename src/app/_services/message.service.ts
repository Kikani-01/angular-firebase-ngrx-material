import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  doc,
  Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private fs: Firestore) {}

  addMessage(message: Message) {
    message.id = doc(collection(this.fs, 'id')).id;
    return addDoc(collection(this.fs, 'messages'), message);
  }

  // get messages from the database
  getMessages(): Observable<Message[]> {
    let messageRef = collection(this.fs, 'messages');
    return collectionData(messageRef, { idField: 'id' }) as Observable<
      Message[]
    >;
  }
}
