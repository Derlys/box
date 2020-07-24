import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { collectionData, docData, fromCollectionRef } from 'rxfire/firestore';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  blogs: Observable<any[]>;
  collectionRef: any;

  constructor(private firestore: AngularFirestore) {
    this.collectionRef = this.firestore.collection('courses');
    this.blogs = collectionData(this.collectionRef.ref, 'id');
  }
}
