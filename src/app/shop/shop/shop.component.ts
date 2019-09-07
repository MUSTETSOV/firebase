import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import 'rxjs/add/operator/switchMap';
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
  prod: any [] = [];  // я поставил any вместо Product[], вроде работает
  filteredProducts: Product[];

  constructor(
    route: ActivatedRoute,
    private db: AngularFireDatabase,
    categoryService: CategoryService,
    productService: ProductService) {

    this.categories$ = categoryService.getCategories();




    // рабочий кусок по загрузке
    // но меняем его чтобы исправить два subscriba
    // productService.getAll2().subscribe(prod => this.prod = prod);


    productService
    .getAll2()
    .switchMap(prod => {
      this.prod = prod;
      return route.queryParamMap;
    })
     .subscribe(params => {
        this.category = params.get('category');

        this.filteredProducts = (this.category) ?
        this.prod.filter(p => p.category === this.category) :
        this.prod;
      });
    }




  ngOnInit() {

    // мы используем valueChanges() - возвращает массив, а snapshotChanges() - возвращает observable
    // this.products$ = this.db.list('products').valueChanges();
    }

}
