import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Portfolio } from 'src/app/model/portfolio';



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
      this.db.collection('portfolios').add(portfolio);
    }


ngOnInit() {


  }

}
