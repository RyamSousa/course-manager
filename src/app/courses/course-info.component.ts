import { CourseService } from './course.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";

@Component({
  templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {

  course: Course = {} as Course;

  constructor(private activedRoute: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.course = this.courseService.retrieveById(+String(this.activedRoute.snapshot.paramMap.get('id')));
  }
  save(): void {
    this.courseService.save(this.course);
  }
}
