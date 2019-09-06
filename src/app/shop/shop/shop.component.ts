import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { map } from 'rxjs/operators';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  // products$;
  categories$;
  category: string;
  prod: Product [] = [];
  filteredProducts: Product[];

  constructor(
    route: ActivatedRoute,
    private db: AngularFireDatabase,
    categoryService: CategoryService,
    productService: ProductService) {

    this.categories$ = categoryService.getCategories();

    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');

      this.filteredProducts = (this.category) ?
      this.prod.filter(p => p.category === this.category) :
      this.prod;
    });


    productService.getAll2().subscribe(prod => this.prod = prod);


    }




  ngOnInit() {

    // мы используем valueChanges() - возвращает массив, а snapshotChanges() - возвращает observable
    // this.products$ = this.db.list('products').valueChanges();
    }

}
