import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

  // The 'Input' turns 'rating' into component attribute for using in html
  @Input()
  rating: number = 0;

  starWidth: number = 0;

  ngOnChanges(): void {
    this.starWidth = this.rating * (74 / 5);
  }
}
