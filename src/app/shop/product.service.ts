import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private db: AngularFireDatabase) { }

  productList: AngularFireList<any>;

  create(product) {
  return this.db.list('/products').push(product);
}


getAll() {
  this.productList = this.db.list('products');
  return this.productList.snapshotChanges();

}


}
