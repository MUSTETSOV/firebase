import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }



  // моя функция
  getCategories() {
    return this.db.list('/categories', ref => ref.orderByChild('name'))
    .valueChanges();    // в отличие от MOCH добавляем .valueChanges()
  }





}
