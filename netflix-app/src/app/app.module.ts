import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileSelectComponent } from './profile-select/profile-select.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { Movie1Component } from './movie1/movie1.component';
import { Movie2Component } from './movie2/movie2.component';
import { Movie3Component } from './movie3/movie3.component';
import { Movie4Component } from './movie4/movie4.component';
import { Movie5Component } from './movie5/movie5.component';
import { Trend1Component } from './trend1/trend1.component';
import { Trend2Component } from './trend2/trend2.component';
import { Trend3Component } from './trend3/trend3.component';
import { Trend4Component } from './trend4/trend4.component';
import { Trend5Component } from './trend5/trend5.component';
import { Top1Component } from './top1/top1.component';
import { Top2Component } from './top2/top2.component';
import { Top3Component } from './top3/top3.component';
import { Top4Component } from './top4/top4.component';
import { Top5Component } from './top5/top5.component';

const appRoutes: Routes = [
  { path: 'profile', component: ProfileSelectComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', component: SignInComponent },
  { path: 'Desc1', component: Movie1Component },
  { path: 'Desc2', component: Movie2Component },
  { path: 'Desc3', component: Movie3Component },
  { path: 'Desc4', component: Movie4Component },
  { path: 'Desc5', component: Movie5Component },
  { path: 'Trend1', component: Trend1Component },
  { path: 'Trend2', component: Trend2Component },
  { path: 'Trend3', component: Trend3Component },
  { path: 'Trend4', component: Trend4Component },
  { path: 'Trend5', component: Trend5Component },
  { path: 'Top1', component: Top1Component },
  { path: 'Top2', component: Top2Component },
  { path: 'Top3', component: Top3Component },
  { path: 'Top4', component: Top4Component },
  { path: 'Top5', component: Top5Component },
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileSelectComponent,
    HomePageComponent,
    SignInComponent,
    Movie1Component,
    Movie2Component,
    Movie3Component,
    Movie4Component,
    Movie5Component,
    Trend1Component,
    Trend2Component,
    Trend3Component,
    Trend4Component,
    Trend5Component,
    Top1Component,
    Top2Component,
    Top3Component,
    Top4Component,
    Top5Component,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
