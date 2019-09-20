import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from 'src/app/model/portfolio';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  defaultImg: string  = 'assets/images/noImage.jpg';

  @Input()
  portfolios: Portfolio[];

  constructor() { }

  ngOnInit() {
  }


}
