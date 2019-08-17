import { Component, OnInit } from '@angular/core';
import {Course} from '../../model/course';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { Lesson } from 'src/app/model/lesson';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: Course;

  lessons: Lesson[];

  lastPageLoaded = 0; // определяем сколько страниц мы уже загрузили

  loading = false;

  displayedColumns = ['seqNo', 'description', 'duration'];

  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService ) { }

  ngOnInit() {

    this.course = this.route.snapshot.data['course'];

    this.loading = true;

    this.coursesService.findLessons(this.course.id)
    .pipe(
      finalize(() => this.loading = false)
  )
    .subscribe(
        lessons => this.lessons = lessons
    );

  }

    loadMore() {

      this.lastPageLoaded++;

      this.loading = true;

      this.coursesService.findLessons(this.course.id, 'asc',
          this.lastPageLoaded)
          .pipe(
              finalize(() => this.loading = false)
          )
          .subscribe(lessons => this.lessons = this.lessons.concat(lessons));

  }





}
