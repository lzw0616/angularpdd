import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Confirmable, Emoji } from '../../decolators';
export interface Channel {
  id: number,
  icon: string,
  title: string,
  link:string
}
@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  private _username=""
  @Output() usernameChange = new EventEmitter()
  @Emoji() result = 'hello'
  @Input() cols=8;
  @Input() displayCols=5;
  sliderMargin = '0'
  constructor() { }
  @Input()
  public get username() : string {
    return this._username
  } 
  @Confirmable('您确定要执行吗')
  handleClick(){
    console.log('点击已执行');
    
  }
  public set username(value : string) {
    this._username = value;
    this.usernameChange.emit(value)
  }
  
  
  ngOnInit() {
  }
  
  public get scrollable() : boolean {
    return this.cols > this.displayCols
  }
  
  public get templateRows() : string {
    return `minmax(auto, max-content)`
  }
  
  public get templateColumns() : string {
    return `repeat(${this.cols},calc((100vw - ${this.displayCols * 0.4}rem) / ${this.displayCols}))`
  }
  handleScroll(ev:Event) {
    this.sliderMargin = `0 ${100*(<HTMLDivElement>ev.target).scrollLeft / (<HTMLDivElement>ev.target).scrollWidth}%`
  }
  
  
}
