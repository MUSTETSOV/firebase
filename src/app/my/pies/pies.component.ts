import { Component, OnInit } from '@angular/core';
import { Pie } from 'src/app/model/pie';
import { convertSnaps } from '../../services/db-utils';

import OrderByDirection = firebase.firestore.OrderByDirection;
import { Observable, pipe } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { map, first, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-pies',
  templateUrl: './pies.component.html',
  styleUrls: ['./pies.component.css']
})
export class PiesComponent implements OnInit {

  pies$: Observable<Pie[]>;

   lastPageLoaded = 3; // определяем сколько страниц мы уже загрузили

   loading = false;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {


    this.pies$ = this.loadAllPies();

  }


// сортирует по полю desc, по name не хочет
// выводит только значения, где присутствует desk так как он учавствует в pipe

loadAllPies(pageNumber = 0, pageSize = 3): Observable<Pie[]> {
  return this.db.collection('pies',
        ref => ref .orderBy('desc')
        .limit(pageSize)
       )
        .snapshotChanges()
        .pipe(
        map(snaps => convertSnaps<Pie>(snaps)),
        first());
}

  loadMore() {

    this.lastPageLoaded = this.lastPageLoaded + 3;
    this.pies$ = this.loadAllPies(0, this.lastPageLoaded);
}



/////////// эта рабочая
//   loadAllPies(): Observable<Pie[]> {
//     return this.db.collection(
//       'pies',
//           ref => ref // .orderBy("name")
//       )
//       .snapshotChanges()
//       .pipe(
//           map(snaps => convertSnaps<Pie>(snaps)),
//           first());
// }



}
