import { StarComponent } from './star/star.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component'
import { FormsModule } from '@angular/forms';

// Is required declare all components for using in other templates
@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
