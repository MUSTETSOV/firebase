import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';


import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';
import { Observable, Subscription } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  // exercises: Exercise[] = [];
  // изначально exercises был массивом


  // теперь чтобы работать с Firebase делаем его Observable
  // exercises: Observable<any>;

  exercises: Exercise[];
  exerciseSubscription: Subscription;


  constructor(
    private trainingService: TrainingService,
    private db: AngularFirestore) { }

  ngOnInit() {
    // здесь подключаемся к базе через .valueChanges();
    // this.exercises = this.db
    // .collection('aviableExercises')
    // .valueChanges();


    this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(
      exercises => (this.exercises = exercises)
    );
    this.trainingService.fetchAvailableExercises();



// рабочий кусок////////////////////////////////
//  // здесь подключаемся к базе через
//  this.exercises = this.db
//  .collection('aviableExercises')
//  .snapshotChanges()
//  .pipe(
//  map(docArray => {
//    return docArray.map(doc => {
//      return {
//        id: doc.payload.doc.id,
//        name: doc.payload.doc.data().name,
//        duration: doc.payload.doc.data().duration,
//        calories: doc.payload.doc.data.calories

//      };
//    });
//  }),
//  catchError((e:Response)=> {
//    return throwError(e);
//  }      // оператор map применяется к observaable
//  ))
//  .subscribe(result => {    // подписываемся на него и получаем result
//    console.log(result);
// });












    // здесь через observable просматриваем консоль snapshotChanges()
    // с помощью snapshotChanges() мы можем увидеть id документа (данные и метаданные)
    this.db
    .collection('aviableExercises')
    .snapshotChanges()
    .subscribe(result => {    // подписываемся на него и получаем result
      console.log(result);
  });



    // здесь через observable просматриваем консоль valueChanges()
    this.db
    .collection('aviableExercises')     // читаем коллекцию aviableExercises
    .valueChanges()           // это observable
    .subscribe(result => {    // подписываемся на него и получаем result
      console.log(result);
  });


  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  ngOnDestroy() {
    this.exerciseSubscription.unsubscribe();
  }

}
