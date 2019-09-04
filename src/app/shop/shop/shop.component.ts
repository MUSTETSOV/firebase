import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products$;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {

    // мы используем valueChanges() - возвращает массив, а snapshotChanges() - возвращает observable

    this.products$ = this.db.list('products').valueChanges();
    }

}
