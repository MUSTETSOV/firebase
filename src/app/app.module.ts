import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// в трекере импортируем
import { FlexLayoutModule } from '@angular/flex-layout';



import { AppRoutingModule } from './app-routing.module';

import { StopTrainingComponent } from './training/current-training/stop-training.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFirestoreModule } from 'angularfire2/firestore';


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeService } from './shared/employee.service';
import { environment } from '../environments/environment';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

import { PastTrainingsComponent } from './training/past-trainings/past-trainings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/training.service';
import { TableComponent } from './my/table/table.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CoursesComponent } from './my/courses/courses.component';
import { CoursesCardListComponent } from './my/courses-card-list/courses-card-list.component';
import { PortfolioCarouselComponent } from './my/portfolio-carousel/portfolio-carousel.component';
import { NguCarouselModule } from '@ngu/carousel';
import { PortfolioListComponent } from './my/portfolio-list/portfolio-list.component';
import { MatMenu } from '@angular/material';
import { CourseComponent } from './my/course/course.component';
import { CourseResolver } from './services/course.resolver';
import { PiesComponent } from './my/pies/pies.component';
import { CourseDialogComponent } from './my/course-dialog/course-dialog.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ProductFormComponent } from './shop/admin/product-form/product-form.component';
import { ProductsComponent } from './shop/admin/products/products.component';
import { CategoryService } from './shop/category.service';
import { ProductService } from './shop/product.service';
import { Test1Component } from './test/test1/test1.component';
import { MatConfirmDialogComponent } from './shop/mat-confirm-dialog/mat-confirm-dialog.component';
import { ShopComponent } from './shop/shop/shop.component';
// импорт всех vaterial компонентов очущ через модуль material

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    StopTrainingComponent,
    TableComponent,
    CoursesComponent,
    CoursesCardListComponent,
    PortfolioCarouselComponent,
    PortfolioListComponent,
    CourseComponent,
    PiesComponent,
    CourseDialogComponent,
    ProductFormComponent,
    ProductsComponent,
    Test1Component,
    MatConfirmDialogComponent,
    ShopComponent



  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlexLayoutModule,
    FormsModule,        // для формы трекера
    AngularFirestoreModule.enablePersistence() ,   // это св-во присывает данные в кеш и позволяет работать офлайн
    AngularFireAuthModule,
    NguCarouselModule,
    AngularFireStorageModule    // он нужен для редактирования курсов

  ],
  providers: [EmployeeService, AuthService, TrainingService, CourseResolver, CategoryService, ProductService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent, CourseDialogComponent, MatConfirmDialogComponent]    // эта запись необходима,
  // так как компонент StopTrainingComponent прописан как .ts файл и является диалоговым окном
})
export class AppModule { }
