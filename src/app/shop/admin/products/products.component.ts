import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../product.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DialogService } from '../../dialog.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['title', 'price', 'category', 'actions'];
  // tslint:disable-next-line: max-line-length
  @ViewChild(MatSort, {  static: false }) sort: MatSort;                     // второй аргумент добавил, т. к. необходимо с версии 8 два аргумента
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  searchKey: string;

  id;


  constructor(private productService: ProductService, private dialog: MatDialog, private dialogService: DialogService) {

   }

  ngOnInit() {


    this.productService.getAll().subscribe(
      list => {
          let array = list.map(item => {
            return {
              $key: item.key,
              ...item.payload.val()
          };
        });
          this.listData = new MatTableDataSource(array);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;

          // делаем поиск только по избранным полям

          // это как-то работает, но с ошибками см в работающих исходник, но он не работает
          // Moch сделал это через onDestroy, можно попробовать
          // все работает, только поиск по одному слову (так сказано в filterPredicate)

          this.listData.filterPredicate =
           (data, filter) => data.title.toLowerCase().indexOf(filter) != -1;


    }
    );
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onDelete($key) {
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res => {
      if (res) {
       this.productService.delete($key);
       }
    });
  }

}
