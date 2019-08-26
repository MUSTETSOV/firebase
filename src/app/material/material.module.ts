import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material'; // импортируем все библиотеки material
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatNativeDateModule,
    Material.MatSidenavModule,
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatListModule,
    Material.MatTabsModule,
    Material.MatCardModule,
    Material.MatProgressSpinnerModule,
    Material.MatDialogModule,
    Material.MatTableModule,
    Material.MatSortModule,
    Material.MatPaginatorModule,
    Material.MatMenuModule,
    Material.MatProgressBarModule,
    Material.MatTableModule,
    Material.MatDialogModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatSidenavModule,
    Material.MatToolbarModule,
    Material.MatIconModule,
    Material.MatListModule,
    Material.MatTabsModule,
    Material.MatCardModule,
    Material.MatProgressSpinnerModule,
    Material.MatDialogModule,
    Material.MatTableModule,
    Material.MatSortModule,
    Material.MatPaginatorModule,
    Material.MatMenuModule,
    Material.MatProgressBarModule,
    Material.MatTableModule,
    Material.MatDialogModule
  ],
  declarations: [],
  providers: [

  // здесь настройка DatePicker
    {provide: MAT_DATE_LOCALE, useValue: 'uk-UA'},  // поставил нашу локализацию, для англ en-GB
  ],
})
export class MaterialModule { }
