import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoMovie1() {
    this.router.navigate(['/Desc1']);
  }
  gotoMovie2() {
    this.router.navigate(['/Desc2']);
  }
  gotoMovie3() {
    this.router.navigate(['/Desc3']);
  }
  gotoMovie4() {
    this.router.navigate(['/Desc4']);
  }
  gotoMovie5() {
    this.router.navigate(['/Desc5']);
  }
  gotoTrend1() {
    this.router.navigate(['/Trend1']);
  }
  gotoTrend2() {
    this.router.navigate(['/Trend2']);
  }
  gotoTrend3() {
    this.router.navigate(['/Trend3']);
  }
  gotoTrend4() {
    this.router.navigate(['/Trend4']);
  }
  gotoTrend5() {
    this.router.navigate(['/Trend5']);
  }
  gotoTop1() {
    this.router.navigate(['/Top1']);
  }
  gotoTop2() {
    this.router.navigate(['/Top2']);
  }
  gotoTop3() {
    this.router.navigate(['/Top3']);
  }
  gotoTop4() {
    this.router.navigate(['/Top4']);
  }
  gotoTop5() {
    this.router.navigate(['/Top5']);
  }
}
