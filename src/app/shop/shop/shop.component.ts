import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products$;
  categories$;
  category: string;

  constructor(
    route: ActivatedRoute,
    private db: AngularFireDatabase,
    categoryService: CategoryService) {

    this.categories$ = categoryService.getCategories();
    route.queryParamMap.subscribe(params => {
      let category = params.get('category');


    });
  }

  ngOnInit() {

    // мы используем valueChanges() - возвращает массив, а snapshotChanges() - возвращает observable

    this.products$ = this.db.list('products').valueChanges();



    }

}
