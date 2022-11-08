import { interval, map, Observable, takeWhile,tap } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  @Input() startDate = new Date();
  @Input() futureDate!: Date;
  private _MS_PER_SECOND = 1000
  countDown$!: Observable<string>;
  constructor() { }

  ngOnInit(): void {
    this.countDown$ = this.getCountDownObservable(this.startDate, this.futureDate)
  }
  private getCountDownObservable(startDate:Date,futureDate:Date) {
    return interval(1000).pipe(
      map(elapse => this.diffInsec(startDate, futureDate) - elapse),
      takeWhile(gap => gap >=0),
      tap(val => console.log(val)),
      map(sec =>( {
        day:Math.floor(sec / 3600 /24),
        hour: Math.floor((sec / 3600) % 24),
        minute:Math.floor((sec / 60) % 60),
        second:Math.floor(sec % 60)
      })),
      map(({hour,minute,second}) => `${hour}:${minute}:${second}`)
    );
  }
  private diffInsec(start: Date, futureDate: Date) {
    const diff = futureDate.getTime() - start.getTime();
    return Math.floor(diff / this._MS_PER_SECOND)
  }

}
