import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { AuthGuard } from './auth/auth.guard';
import { TableComponent } from './my/table/table.component';
import { CoursesComponent } from './my/courses/courses.component';
import { PortfolioCarouselComponent } from './my/portfolio-carousel/portfolio-carousel.component';
import { CourseResolver } from './services/course.resolver';
import { CourseComponent } from './my/course/course.component';
import { PiesComponent } from './my/pies/pies.component';
import { ProductFormComponent } from './shop/admin/product-form/product-form.component';
import { ProductsComponent } from './shop/admin/products/products.component';
import { ShopComponent } from './shop/shop/shop.component';
import { HomeComponent } from './gallery/home/home.component';
import { ImageComponent } from './gallery/image/image.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { PortfolioDetailsComponent } from './my/portfolio-details/portfolio-details.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] },   // защищенный роут (напрямую нельзя войти)
  { path: 'table', component: TableComponent},
  { path: 'courses', component: CoursesComponent},

  { path: 'courses/:courseUrl',
    component: CourseComponent,
    resolve: {
      course: CourseResolver          // вызываем компонент, который обрабатывает запрос
    }},

  { path: 'carousel', component: PortfolioCarouselComponent},
  { path: 'portfolio-details', component: PortfolioDetailsComponent},
  { path: 'pies', component: PiesComponent},
  { path: 'admin/products', component: ProductsComponent},
  { path: 'admin/products/new', component: ProductFormComponent},
  { path: 'admin/products/:id', component: ProductFormComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'home', component: HomeComponent, children: [
    {path: 'upload', component: ImageComponent},
    {path: 'list', component: ImageListComponent}
  ]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
