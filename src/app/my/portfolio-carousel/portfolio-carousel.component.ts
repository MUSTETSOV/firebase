import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { Portfolio } from 'src/app/model/portfolio';



@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-portfolio-carousel',
  templateUrl: './portfolio-carousel.component.html',
  styleUrls: ['./portfolio-carousel.component.css']
})
export class PortfolioCarouselComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('backgroundGray') public backgroundGray;

  portfolios$: Observable<Portfolio[]>;

  lastPageLoaded = 3; // определяем сколько страниц мы уже загрузили

  constructor(private db: AngularFirestore) { }

  ngOnInit() {



    this.portfolios$ = this.loadAllPortfolios();



    // this.db.collection('portfolios')
    // .snapshotChanges()
    // .pipe(map(snaps => {
    //   return snaps.map(snap => {
    //     return <Portfolio> {
    //       id: snap.payload.doc.id,
    //       ...snap.payload.doc.data()
    //     }
    //   });
    // }));

  }

  loadAllPortfolios(pageNumber = 0, pageSize = 3): Observable<Portfolio[]> {
    return this.db.collection('portfolios',
          ref => ref .orderBy('title')
          .limit(pageSize)
         )
          .snapshotChanges()
          .pipe(map(snaps => {
            return snaps.map(snap => {
              return <Portfolio> {
                id: snap.payload.doc.id,
                ...snap.payload.doc.data()
              }
            });
          }));
          }



  loadMore() {

    this.lastPageLoaded = this.lastPageLoaded + 3;
    this.portfolios$ = this.loadAllPortfolios(0, this.lastPageLoaded);
}

}
