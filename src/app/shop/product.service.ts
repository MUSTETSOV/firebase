import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Product } from './product';

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

getProduct(productId) {
  return this.db.object('products/' + productId).valueChanges();
}

updateProduct(productId, product) {
  return this.db.object('products/' + productId).update(product);
}

delete(productId) {
  return this.db.object('products/' + productId).remove();
}



getAll2() {
  return this.db.list('/products').snapshotChanges()
    .pipe(
      map(actions =>
         actions.map(a => ({ key: a.key, ...a.payload.val()}  )) // here you have made something strange.
      )
    );
}



}
