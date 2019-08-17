import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCarouselComponent } from './portfolio-carousel.component';

describe('PortfolioCarouselComponent', () => {
  let component: PortfolioCarouselComponent;
  let fixture: ComponentFixture<PortfolioCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
