import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection } from 'angularfire2/firestore';
import { Portfolio } from 'src/app/model/portfolio';
import { config } from 'process';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
   portfolio = {};


  portfolios: AngularFirestoreCollection<Portfolio>;
  

  constructor(private db: AngularFirestore) { }


  save(portfolio: Portfolio) {

    // this.portfolios = db.collection<Portfolio>(config.collection_endpoint);

    this.db.collection('portfolios').add(portfolio);

    
    
  
  }




  // save(product) {
  //   // или обновляем и создаем новый продукт

  //   if (this.id) { this.productService.updateProduct(this.id, product); } else { this.productService.create(product); }


  //   this.router.navigate(['admin/products']);
  //   console.log(product);
  //  }



  //  create(product) {
  //   return this.db.list('/products').push(product);
  // }


  // saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {

  //   return from(this.db.doc(`courses/${courseId}`).update(changes));

  // }




  ngOnInit() {
  }

}
