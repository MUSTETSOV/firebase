import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection } from 'angularfire2/firestore';
import { Portfolio } from 'src/app/model/portfolio';






import { config } from 'process';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
   portfolio = {};



   myDate = new Date();
   today = Date.now();
   

formatDate(date: Date): string {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}
   
  



  portfolios: AngularFirestoreCollection<Portfolio>;
  


  constructor(private db: AngularFirestore) { }


  save(portfolio: Portfolio) {
    
    this.db.collection('portfolios').add(portfolio);

   //  this.resetForm();
  }

  ngOnInit() {

   
   


  }

}
