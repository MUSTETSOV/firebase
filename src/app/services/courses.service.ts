import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map, first } from 'rxjs/operators';
import { Course } from '../model/course';
import { Observable, from } from 'rxjs';
import { convertSnaps } from './db-utils';
import { Lesson } from '../model/lesson';

import OrderByDirection = firebase.firestore.OrderByDirection;


@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor(private db: AngularFirestore) { }


  // сохранение изменений в БД
  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {

    return from(this.db.doc(`courses/${courseId}`).update(changes));

  }




      // // здесь загружаем из базы все курсы
      // loadAllCourses(): Observable<Course[]> {
      //   return this.db.collection('courses')
      //   .snapshotChanges()
      //   .pipe(
      //     map(snaps => {
      //         return snaps.map(snap => {
      //         return <Course> {
      //           id: snap.payload.doc.id,
      //           ...snap.payload.doc.data()
      //         };
      //         });
      //     }),
      //       first()); // добавляем его если не хотим обновлять на лету (удалить first() и запятую перед)
      //   }




      // загружаем и сортируем
        loadAllCourses(): Observable<Course[]> {
          return this.db.collection(
            'courses',
            ref => ref // .orderBy('description') // или можем сортировать по полю
                .where('seqNo', '<=', 10))     // находим нужный, возможны любые комбинации выборки
          .snapshotChanges()
          .pipe(
            map(snaps => {
                return snaps.map(snap => {                // этот кусок вынесен в отдельный файл как функция convertSnaps
                return <Course> {                         // в db-utils.ts
                  id: snap.payload.doc.id,
                  ...snap.payload.doc.data()
                };
                });
            }),
              first()); // добавляем его если не хотим обновлять на лету (удалить first() и запятую перед)
          }



          // поиск адрес курса для редактирования
          findCourseByUrl(courseUrl: string): Observable<Course> {
            return this.db.collection('courses',
                ref => ref.where('url', '==', courseUrl))
                .snapshotChanges()
                .pipe(
                    map(snaps => {

                        const courses = convertSnaps<Course>(snaps);

                        // tslint:disable-next-line: triple-equals
                        return courses.length == 1 ? courses[0] : undefined;
                    }),
                    first()
                );
        }


        findLessons(courseId: string, sortOrder: OrderByDirection = 'asc',
                    pageNumber = 0, pageSize = 3): Observable<Lesson[]> {

          return this.db.collection(`courses/${courseId}/lessons`,
            ref => ref.orderBy('seqNo', sortOrder)
            .limit(pageSize)
            .startAfter(pageNumber * pageSize))
        .snapshotChanges()
        .pipe(
          map(snaps => convertSnaps<Lesson>(snaps)),
      first()
  );

}


      }
