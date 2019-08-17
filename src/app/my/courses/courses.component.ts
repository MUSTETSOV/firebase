import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Course } from 'src/app/model/course';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  beginnersCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {


/// в видеоуроке это его home компонент


//     this.db.collection('courses').valueChanges()
//     .subscribe(val => console.log(val));





//     this.db.collection('courses').snapshotChanges()
//     .subscribe(snaps => {
//       const courses: Course[] = snaps.map(snap => {
//         return <Course> {
//           id: snap.payload.doc.id,
//           ...snap.payload.doc.data()
//         }
//       });
//       console.log(courses);
//   });




//     this.db.collection('courses').stateChanges()
//   .subscribe(snaps => {
//     const courses: Course[] = snaps.map(snap => {
//       return <Course> {
//         id: snap.payload.doc.id,
//         ...snap.payload.doc.data()
//       }
//     });
//     console.log(courses);
// });


this.reloadCourses();
  }



  reloadCourses() {
    this.courses$ = this.coursesService.loadAllCourses();

    // разделяем курсы на beginner и advanced

    this.beginnersCourses$ = this.courses$.pipe(
        map(courses => courses.filter(
            course => course.categories.includes("BEGINNER"))));

    this.advancedCourses$ = this.courses$.pipe(
        map(courses => courses.filter(
            course => course.categories.includes("ADVANCED"))));
}


}
