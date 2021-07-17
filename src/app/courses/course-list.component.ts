import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.4,
        releaseDate: 'July, 17, 2021'
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '/assets/images/http.png',
        price: 59.99,
        code: 'LKL-8796',
        duration: 80,
        rating: 4.0,
        releaseDate: 'July, 17, 2021'
      }
    ]
  }

}
