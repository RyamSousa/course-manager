import { NavBar } from './nav-bar/nav-bar.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { StarComponent } from './star/star.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component'

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';

// Is required declare all components for using in other templates
@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBar,
    CourseInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'courses',
        component: CourseListComponent
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent
      },
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: Error404Component
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
